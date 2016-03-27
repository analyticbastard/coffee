(ns coffee-client.core
  ;^:figwheel-always
  (:require [reagent.core :as r :refer [atom]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! put! close! chan]]
            [re-frame.core :refer [register-handler path register-sub dispatch dispatch-sync subscribe]]
            [goog.events :as events]
            [secretary.core :as secretary :refer-macros [defroute]]
            [datascript.core :as d]
            [coffee.schema])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [reagent.ratom :refer [reaction]])
  (:import goog.History
           goog.history.EventType)
  )


(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app (js/document.getElementById "app"))

(defn create-ws [ch]
  (go (let [location (.-location js/window)
            hostname (.-hostname location)
            port     (.-port location)
            {:keys [ws-channel error]} (<! (ws-ch (str "ws://" hostname ":" 3000 "/ws") {:format :transit-json}))]
        (println "create" ws-channel)
        (if (or error (nil? ws-channel))
          nil                                               ; todo signal error ;(error-component error)
          (>! ch ws-channel)))))


(defn send! [server-ch msg]
  (println "send!" msg)
  (go [] (>! server-ch msg)))

(defn receive! [server-ch conn]
  (go-loop []
           (let [{:keys [message _] :as msg} (<! server-ch)]
             (println "receive!" message)
             (when message
               (d/transact! conn message)
               (recur)))))

(register-handler :initialize
                  (fn [db [_ server-ch]]
                    (let [conn-post (d/create-conn (coffee.schema/create-schema))]
                      (println "init" server-ch)
                      (when server-ch
                        (receive! server-ch conn-post)
                        (assoc db :conn-pre (d/create-conn (coffee.schema/create-schema))
                                  :conn-post conn-post
                                  :server-ch server-ch)))))

(register-handler :pre-login
                  (fn [db [_ user-name]]
                    (let [server-ch (:server-ch db)
                          conn-post (:conn-post db)
                          db-listener-callback (fn [{:keys [db-after]} tx-report]
                                                 (when (d/entity db-after [:user/name user-name])
                                                   (secretary/dispatch! "/organize")
                                                   (d/unlisten! conn-post :login)))
                          tx-data   [{:db/id -1
                                      :user/name user-name}]]
                      (if (d/entity (d/db conn-post) [:user/name user-name])
                        (if (:session/organizer (d/entity (d/db conn-post) [:session/name "session"]))
                          (secretary/dispatch! "/dashboard")
                          (secretary/dispatch! "/organize"))
                        (d/listen! conn-post :login db-listener-callback))
                      (send! server-ch tx-data)
                      (assoc db :user-name user-name))))

(register-handler :pre-organize
                  (fn [db _]
                    (let [user-name (:user-name db)
                          server-ch (:server-ch db)
                          conn-post (:conn-post db)
                          db-listener-callback (fn [db]
                                                 (println "db change xx!")
                                                 (secretary/dispatch! "/dashboard")
                                                 (d/unlisten! conn-post :organize))
                          tx-data   [{:db/id [:session/name (coffee.schema/get-session-name)]
                                      :session/organizer [:user/name user-name]}]]
                      (d/listen! conn-post :organize db-listener-callback)
                      (send! server-ch tx-data))
                    db))

(register-handler :pre-choose
                  (fn [db [_ choice]]
                    (let [user-name   (:user-name db)
                          server-ch   (:server-ch db)
                          conn-post   (:conn-post db)
                          db-post     (d/db conn-post)
                          prev-choice (first (d/q '[:find [?coffee-name ...]
                                                    :in $ ?user-name
                                                    :where
                                                    [?u :user/name ?user-name]
                                                    [?u :user/choice ?c]
                                                    [?c :coffee/name ?coffee-name]
                                                    ]
                                                  db-post user-name))
                          tx-data     [(if (= prev-choice choice)
                                         [:db/retract [:user/name user-name] :user/choice [:coffee/name choice]]
                                         {:db/id       [:user/name user-name]
                                          :user/choice [:coffee/name choice]})]]
                      (send! server-ch tx-data))
                    db))

(register-handler :pre-shutdown (fn [db _]
                                  (let [user-name (:user-name db)
                                        server-ch (:server-ch db)
                                        ;tx-data   [:db/retract [:session/name (:db/id (d/entity))]]
                                        ]
                                    ;(send! server-ch tx-data)
                                    )
                                  db))

(defn datascript-query [conn query]
  (let [db (d/db conn)]
    (d/q query db)))

(defn query->reaction
  ([db query post-process-fn]
   (let [conn (:conn-post @db)
         initial (-> conn (datascript-query query) post-process-fn)
         result-atom (atom nil)
         db-listener-callback (fn [tx-report]
                                (let [value (-> conn (datascript-query query) post-process-fn)]
                                  (reset! result-atom value)))]
     (d/listen! conn db-listener-callback)
     (reaction (or @result-atom initial))))
  ([db query]
   (query->reaction db query identity)))

(register-sub :pre-login
              (fn [db]
                (reaction (:user-name @db))))

(register-sub :initialize
              (fn [db] db))

(register-sub :post-organize
              (fn [db _]
                (query->reaction db
                                 '[:find [?name ...]
                                   :where
                                   [_ :session/organizer ?u]
                                   [?u :user/name ?name]]
                                 first)))


(register-sub :post-coffee-types
              (fn [db _]
                (query->reaction db
                                 '[:find ?name ?img
                                   :where
                                   [?c :coffee/name ?name]
                                   [?c :coffee/img ?img]])))

(register-sub :post-choose
              (fn [db _]
                (query->reaction db
                                 '[:find ?user-name ?coffee-name
                                   :where
                                   [?u :user/choice ?c]
                                   [?u :user/name ?user-name]
                                   [?c :coffee/name ?coffee-name]
                                   ])))




(defn error-component [error]
  [:div
   "Couldn't connect to websocket: "
   (pr-str error)])

(defn navbar-component [page-to-switch-to]
  [:nav.navbar.navbar-default
   [:div.container-fluid
    (when (= page-to-switch-to "/dashboard")
      [:div.nav.navbar-nav.navbar-left
       [:button.navbar-btn.glyphicon.glyphicon.glyphicon-chevron-left {:on-click #(secretary/dispatch! "/dashboard")}]])
    [:p.navbar-text
     (str "Organized by " @(subscribe [:post-organize]))
     ]
    (when (= page-to-switch-to "/users")
      [:div.nav.navbar-nav.navbar-right
       [:button.navbar-btn.glyphicon.glyphicon-shopping-cart {:on-click #(secretary/dispatch! "/users")}]])]])

(defn users-dashboard-component []
  (let [choice (into {} @(subscribe [:post-choose]))]
    [:div [navbar-component "/dashboard"]
     [:ul.list-group
      (for [user (map first choice)]
        [:li.list-group-item user (choice user)]
        )]]
    )
  )

(defn get-count-for-coffee-type [all-users-choices coffee-name]
  [:span (str "x " (->> all-users-choices
                        vals
                        (filter #(= coffee-name %))
                        count))]
  )

(defn coffee-button-component [coffee-name coffee-img]
  (let [all-users-choices @(subscribe [:post-choose])
        user-name         @(subscribe [:pre-login])]
    [:li.btn.btn-default {:on-click #(dispatch [:pre-choose coffee-name])
                          :class    (when (->> all-users-choices
                                               vec
                                               (filter (fn [[u c]]
                                                         (and (= user-name u) (= coffee-name c))))
                                               not-empty) "active")
                          }
     [:img {:src   coffee-img
            :style {:float "left"}
            :width "15px"}]
     [:span coffee-name]
     [get-count-for-coffee-type all-users-choices coffee-name]
     ]))

(defn coffee-types []
  [:ul.btn-group-vertical
   (for [[name img] @(subscribe [:post-coffee-types])]
     [coffee-button-component name img])])

(defn main-dashboard-component []
  [:div
   [navbar-component "/users"]
   [:div.panel.panel-default
    [:div.panel-heading [:h3.panel-title "Select your coffee"]]
    [:div.panel-body
     [coffee-types]
     ]]
   (if (= @(subscribe [:pre-login]) @(subscribe [:post-organize]))
       [:button.btn.bth-default
        {:on-click #(dispatch [:pre-shutdown])}
        "Close coffee session"]
       [:button.btn.bth-default
        {:on-click #(dispatch [:pre-organize])}
        "Take over session"])
   ])

(defn organize-component []
  [:div.modal-dialog
   [:div.loginmodal-container
    [:div.panel-heading [:h3.form-sign-in-heading "Organize coffee session"]]
    [:button.btn.btn-lg.btn-primary.btn-block
     {:on-click #(dispatch [:pre-organize])}
     "Organize coffee session"]]]
  )


(defn login-page []
  (let [                                                    ;_ @(subscribe [:initialize])
        user-login (atom "")
        login-fn #(dispatch [:pre-login @user-login])
        text-input-component (fn []
                               [:input.form-control
                                {:type         "text"
                                 :placeholder  "Name"
                                 :class        "form-control"
                                 :on-key-press #(when (and (= 13 (.-charCode %)) (not-empty @user-login))
                                                 (login-fn))
                                 :onChange     #(reset! user-login (-> % .-target .-value))}])
        ]
    [:div.modal-dialog
     [:div.loginmodal-container
      [:div.form-sign-in
       [:h2.form-sign-in-heading "Sign In"]
       [text-input-component]
       [:input.btn.btn-lg.btn-primary.btn-block
        {:type     "submit"
         :on-click login-fn}]]]]))


(defonce reload-data (atom {:last-page "/"}))

(do
  (defroute login "/" []
            (do
              (swap! reload-data assoc :last-page "/")
              (let [ch (chan)]
                (create-ws ch)
                (go (dispatch [:initialize (<! ch)])
                    (r/render [login-page] app)))))
  (defroute organize "/organize" []
            (do
              (swap! reload-data assoc :last-page "/organize")
              (r/render [organize-component] app)))
  (defroute dashboard "/dashboard" []
            (do
              (swap! reload-data assoc :last-page "/dashboard")
              (r/render [main-dashboard-component] app)))
  (defroute users "/users" []
            (do
              (swap! reload-data assoc :last-page "/users")
              (r/render [users-dashboard-component] app))))

#_(let [h (History.)]
    (events/listen h EventType.NAVIGATE #(secretary/dispatch! (.-token %)))
    (doto h
      (.setEnabled true)))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on your application
  (println "reload!" (:last-page @reload-data))
  (secretary/dispatch! (:last-page @reload-data))
  )

(defonce once-show-page (secretary/dispatch! "/"))