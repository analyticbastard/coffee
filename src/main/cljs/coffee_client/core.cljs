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

(defonce reload-data (atom {:last-page "/"
                            :last-tab (atom :menu)}))

(defn create-ws [ch]
  (go (let [location (.-location js/window)
            hostname (.-hostname location)
            port     (.-port location)
            {:keys [ws-channel error]} (<! (ws-ch (str "ws://" hostname ":" port "/ws") {:format :transit-json}))]
        (println "create" ws-channel)
        (if (or error (nil? ws-channel))
          nil                                               ; todo signal error ;(error-component error)
          (>! ch ws-channel)))))


(defn send! [server-ch msg]
  (println "send!" msg)
  (go [] (>! server-ch msg)))

(defn send-datascript-tx! [server-ch msg]
  (println "send-datascript-tx!" msg)
  (send! server-ch {:datascript-tx msg}))

(defn process-command [conn message]
  (let [command (:command message)]
    (case command
      :shutdown (d/reset-conn! conn @(d/create-conn (coffee.schema/create-schema))))))

(defn receive! [server-ch conn]
  (go-loop []
           (let [{:keys [message _] :as msg} (<! server-ch)]
             (println "receive!" message)
             (when message
               (if (map? message)
                 (process-command conn message)
                 (d/transact! conn message))
               (recur)))))

(register-handler :init-server-ch
                  (fn [db [_ server-ch]]
                    (println "init" server-ch)
                    (assoc db :server-ch server-ch)))

(register-handler :initialize
                  (fn [db _]
                    (let [conn-post (d/create-conn (coffee.schema/create-schema))
                          server-ch (:server-ch db)]
                      (if server-ch
                        (do
                          (receive! server-ch conn-post)
                          (assoc db :conn-pre (d/create-conn (coffee.schema/create-schema))
                                    :conn-post conn-post))
                        db))))

(register-handler :pre-login
                  (fn [db [_ user-name]]
                    (let [server-ch            (:server-ch db)
                          tx-data              [{:db/id     -1
                                                 :user/name user-name}]]
                      (send-datascript-tx! server-ch tx-data)
                      (assoc db :user-name user-name))))

(register-handler :pre-organize
                  (fn [db _]
                    (let [user-name (:user-name db)
                          server-ch (:server-ch db)
                          tx-data   [{:db/id [:session/name (coffee.schema/get-session-name)]
                                      :session/organizer [:user/name user-name]}]]
                      (send-datascript-tx! server-ch tx-data))
                    db))

(register-handler :pre-choose
                  (fn [db [_ section choice]]
                    (let [user-name   (:user-name db)
                          server-ch   (:server-ch db)
                          conn-post   (:conn-post db)
                          db-post     (d/db conn-post)
                          prev-choice (first (d/q '[:find [?choice-name ...]
                                                    :in $ ?user-name ?section-name
                                                    :where
                                                    [?u :user/name ?user-name]
                                                    [?u :user/choice ?c]
                                                    [?c :choice/name ?choice-name]
                                                    [?c :choice/section ?s]
                                                    [?s :section/name ?section-name]
                                                    ]
                                                  db-post user-name section))
                          choice-tx   {:db/id -1
                                       :choice/name choice
                                       :choice/section [:section/name section]
                                       :choice/item [:coffee/name choice]}
                          add-tx      {:db/id       [:user/name user-name]
                                       :user/choice [:choice/name choice]}
                          remove-tx   [:db/retract [:user/name user-name] :user/choice [:choice/name prev-choice]]
                          tx-data     (if prev-choice
                                        (if-not (= prev-choice choice)
                                          [remove-tx choice-tx add-tx]
                                          [remove-tx]
                                          )
                                        [choice-tx add-tx])]
                      (println "!!!!prev" section choice prev-choice)
                      (send-datascript-tx! server-ch tx-data))
                    db))

(register-handler :pre-add-section
                  (fn [db [_ section-name]]
                    (let [server-ch (:server-ch db)
                          tx-data   [{:db/id -1 :section/name section-name}]]
                      (send-datascript-tx! server-ch tx-data)
                      )
                    db))

(register-handler :pre-delete-section
                  (fn [db [_ section-name]]
                    (let [server-ch     (:server-ch db)
                          section-items @(subscribe [:post-menu-name section-name])
                          tx-data       (concat [[:db.fn/retractEntity [:section/name section-name]]]
                                                (for [menu-name section-items]
                                                  [:db.fn/retractEntity [:coffee/name menu-name]]))]
                      (println tx-data)
                      (send-datascript-tx! server-ch tx-data)
                      )
                    db))

(register-handler :pre-add-menu
                  (fn [db [_ section-name menu-name]]
                    (let [server-ch (:server-ch db)
                          tx-data   [{:db/id -1 :coffee/name menu-name :coffee/section [:section/name section-name]}]
                          ]
                      (send-datascript-tx! server-ch tx-data)
                      )
                    db))

(register-handler :pre-delete-menu
                  (fn [db [_ menu-name]]
                    (let [server-ch (:server-ch db)
                          tx-data   [[:db.fn/retractEntity [:coffee/name menu-name]]]]
                      (send-datascript-tx! server-ch tx-data)
                      )
                    db))

(register-handler :pre-shutdown (fn [db _]
                                  (let [server-ch (:server-ch db)
                                        ]
                                    (send! server-ch {:command :shutdown}))
                                  db))


(defn datascript-query
  ([conn query params]
   (let [db (d/db conn)]
     (apply (partial d/q query db) params)))
  ([conn query]
   (let [db (d/db conn)]
     (d/q query db))))

(defn query->reaction
  ([db query post-process-fn params]
   (when-let [conn (:conn-post @db)]
     (let [query-fn             (if params #(datascript-query % query params)
                                           #(datascript-query % query))
           initial              (-> conn query-fn post-process-fn)
           result-atom          (atom nil)
           listening-key        (if params [query params] query)
           db-listener-callback (fn [tx-report]
                                  (let [value    (-> conn query-fn post-process-fn)]
                                    (reset! result-atom value)))]
       (d/listen! conn listening-key db-listener-callback)
       (reaction (or @result-atom initial)))))
  ([db query post-process-fn]
   (query->reaction db query post-process-fn nil))
  ([db query]
   (query->reaction db query identity)))

(register-sub :pre-login
              (fn [db _]
                (reaction (:user-name @db))))

(register-sub :initialize
              (fn [db _] db))

(register-sub :post-login
              (fn [db _]
                (query->reaction db
                                 '[:find [?name ...]
                                   :where
                                   [?u :user/name ?name]]
                                 )))

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
                                 '[:find [?name ...]
                                   :where
                                   [_ :coffee/name ?name]
                                   ])))

(register-sub :post-choose
              (fn [db _]
                (query->reaction db
                                 '[:find ?user-name ?coffee-name
                                   :where
                                   [?u :user/name ?user-name]
                                   [?u :user/choice ?c]
                                   [?c :choice/name ?coffee-name]
                                   ])))

(register-sub :post-section-name
              (fn [db _]
                (query->reaction db
                                 '[:find [?section-name ...]
                                   :where
                                   [_ :section/name ?section-name]
                                   ])))

(register-sub :post-menu-name
              (fn [db [_ section-name]]
                (query->reaction db
                                 '[:find [?menu-name ...]
                                   :in $ ?section-name
                                   :where
                                   [?menu :coffee/name ?menu-name]
                                   [?section :section/name ?section-name]
                                   [?menu :coffee/section ?section ]
                                   ]
                                 identity
                                 [section-name])))

(register-sub :post-shutdown
              (fn [db _]
                (query->reaction db
                                 '[:find [?s ...]
                                   :where
                                   [?s :session/organizer _]
                                   ])))


(defn error-component [error]
  [:div
   "Couldn't connect to websocket: "
   (pr-str error)])

(defn shutdown-component []
  [:div.panel.panel-default
   [:button.btn.bth-default {:on-click #(secretary/dispatch! "/")}
    "Start over"]])

(defn navbar-component [dashboard-atom]
  (let [menu?                   (= :menu @dashboard-atom)
        selections?             (= :selections @dashboard-atom)
        is-admin?               (= @(subscribe [:pre-login]) @(subscribe [:post-organize]))
        admin-active-class      (if (and is-admin? (= :admin @dashboard-atom) ) "active" "")
        menu-active-class       (if menu? "active" "")
        selections-active-class (if selections? "active" "")
        ]
    [:ul.nav.nav-tabs
     [:li {:class menu-active-class :on-click (fn [e] (reset! dashboard-atom :menu) nil)} [:a "Menu"]]
     [:li {:class selections-active-class :on-click (fn [e] (reset! dashboard-atom :selections) nil)} [:a "Order breakdown"]]
     (when is-admin?
       [:li {:class admin-active-class :on-click (fn [e] (reset! dashboard-atom :admin) nil)} [:a "Organizer options"]])
     ])
  )

(defn get-count-for-coffee-type [all-users-choices coffee-name]
  [:span {:style {:float "right" :overflow "hidden"}}
   (str "x " (->> all-users-choices
                  vals
                  (filter #(= coffee-name %))
                  count))]
  )

(defn coffee-button-component [section-name coffee-name all-users-choices]
  (let [user-name         @(subscribe [:pre-login])]
    [:li.btn.btn-default {:on-click #(dispatch [:pre-choose section-name coffee-name])
                          :style    {:height "100%" :width "100%" :overflow "hidden"}
                          :class    (when (->> all-users-choices
                                               vec
                                               (filter (fn [[u c]]
                                                         (and (= user-name u) (= coffee-name c))))
                                               not-empty) "active")
                          }
     [get-count-for-coffee-type all-users-choices coffee-name]
     [:span {:style {:height "100%" :float "left" :overflow "hidden"}} coffee-name]
     ]))

(defn section-selection-component [section-name all-users-choices]
  (vec
    (concat
      [:div.panel.panel-default
       [:div.panel-heading [:h3.panel-title section-name]]]
      (for [menu-name @(subscribe [:post-menu-name section-name])]
        [coffee-button-component section-name menu-name all-users-choices])))
  )


(defn coffee-types []
  (let [all-users-choices @(subscribe [:post-choose])]
    (vec
      (concat
        [:ul.btn-group-vertical {:style {:width "100%" :overflow "hidden"}}]
        (for [section-name @(subscribe [:post-section-name])]
          [section-selection-component section-name all-users-choices])))))

(defn item-component [menu-name]
  [:div.panel.panel-default
   [:div.panel-heading {:style {:overflow "hidden"}}
    [:button.glyphicon.glyphicon-minus {:style    {:height "25px" :width "25px" :float "right"}
                                        :on-click #(dispatch [:pre-delete-menu menu-name])}]
    [:h2.panel-title {:style {:overflow "hidden"}} menu-name]]
   ]
  )

(defn menu-list-component [section-name]
  (let [menu-names @(subscribe [:post-menu-name section-name])]
    (vec
      (concat [:div]
              (map #(do [item-component %]) menu-names)
              ))))

(defn new-menu-component [section-name new-menu-name]
  [:div
   [:div.panel.panel-default {:style {:overflow "hidden"}}
    [:div.panel-heading [:h3.panel-title "Add new menu item"]]
    [:button.glyphicon.glyphicon-plus {:style    {:height "35px" :width "35px" :float "right"}
                                       :on-click #(when (not-empty @new-menu-name)
                                                   (dispatch [:pre-add-menu section-name @new-menu-name]))}]
    [:div {:style {:resize "none" :height "35px" :overflow "hidden"}}
     [:textarea {:placeholder "Combo selection (burger name, burrito combo, etc)/side name, etc" :style {:resize "none" :height "100%" :width "100%"}
                 :onChange    #(reset! new-menu-name (-> % .-target .-value))}]]
    ]]
  )

(defn section-component [section-name]
  [:div.panel.panel-default
   [:div.panel-heading {:style {:overflow "hidden"}}
    [:button.glyphicon.glyphicon-minus {:style    {:height "25px" :width "25px" :float "right"}
                                        :on-click #(dispatch [:pre-delete-section section-name])}]
    [:h2.panel-title {:style {:overflow "hidden"}} section-name]]
   [:ul.list-group
    [:li.list-group-item
     (let [new-menu-name (r/atom "")]
       [:div
        [new-menu-component section-name new-menu-name]
        [menu-list-component section-name]]
       )
     ]
    ]])

(defn section-list-component []
  (vec
    (concat [:div]
            (let [section-names @(subscribe [:post-section-name])]
              (map #(do [section-component %]) section-names)))))

(defn new-section-component []
  (let [new-section-name (atom "")]
    [:div
     [:div.panel.panel-default {:style {:overflow "hidden"}}
      [:div.panel-heading [:h2.panel-title "Add new course"]]
      [:button.glyphicon.glyphicon-plus {:style    {:height "40px" :width "40px" :float "right"}
                                         :on-click #(when (not-empty @new-section-name)
                                                     (dispatch [:pre-add-section @new-section-name]))}]
      [:div {:style {:resize "none" :height "40px" :overflow "hidden"}}
       [:textarea {:placeholder "Course name (Mains, Sides, etc)" :style {:resize "none" :height "100%" :width "100%"}
                   :onChange    #(reset! new-section-name (-> % .-target .-value))}]]
      ]]))

(defn menu-component []
  [:div
   [:div.panel.panel-default
    [:div.panel-heading [:h2.panel-title "Select your meal"]]
    [:div.panel-body
     [coffee-types]
     ]]
   [:button.btn.bth-default  {:on-click #(secretary/dispatch! "/")}
    "Log off"]])


(defn selections-component []
  (let [choice (into {} @(subscribe [:post-choose]))]
    [:ul.list-group
     (for [user (map first choice)]
       [:li.list-group-item user (choice user)]
       )]
    ))

(defn admin-component []
  (let [edit-locked-atom (atom false)]
    (fn []
      [:div
       [:div.panel.panel-default
        [:div.panel-heading [:h3.panel-title "Course set up"]]
        (if-not @edit-locked-atom
          [:div.panel-body
           [new-section-component]
           [section-list-component]
           ]
          [:div.panel-body
           [:span "Edit is locked"]])]
       [:div
        (if-not @edit-locked-atom
          [:button.btn.bth-default
           {:on-click (fn [] (reset! edit-locked-atom true))}
           "Lock editing"]
          [:button.btn.bth-default
           {:on-click (fn [] (reset! edit-locked-atom false))}
           "Unlock editing"])
        [:button.btn.bth-default
         {:on-click #(dispatch [:pre-shutdown])}
         "Close session"]]
       ]))
  )

(defn dashboard-page [dashboard-atom]
  (case @dashboard-atom
    :menu [menu-component]
    :selections [selections-component]
    :admin [admin-component]
    [menu-component]))

(defn main-dashboard-component []
  (let [dashboard-atom (:last-tab @reload-data)]
    (if (empty? @(subscribe [:post-shutdown]))
      [shutdown-component]
      [:div
       [navbar-component dashboard-atom]
       [dashboard-page dashboard-atom]
       ]
      )))

(defn organize-component []
  (let [organizer (subscribe [:post-organize])]
    (when (and organizer @organizer)
      (secretary/dispatch! "/dashboard"))
    [:div.modal-dialog
     [:div.loginmodal-container
      [:div.panel-heading [:h3.form-sign-in-heading "Organize JFF"]]
      [:button.btn.btn-lg.btn-primary.btn-block
       {:on-click #(dispatch [:pre-organize])}
       "Organize JFF"]]])
  )


(defn login-page []
  (let [user-login           (atom "")
        login-fn             #(when-not (empty? @user-login)
                               (dispatch [:initialize])
                               (dispatch [:pre-login @user-login]))
        text-input-component (fn []
                               [:input.form-control
                                {:type         "text"
                                 :placeholder  "Name"
                                 :class        "form-control"
                                 :on-key-press #(when (and (= 13 (.-charCode %)) (not-empty @user-login))
                                                 (login-fn))
                                 :onChange     #(reset! user-login (-> % .-target .-value))}])
        ]
    (fn []
      (let [user-names (subscribe [:post-login])]
        (when (and user-names (contains? (set @user-names) @user-login))
          (if @(subscribe [:post-organize])
            (secretary/dispatch! "/dashboard")
            (secretary/dispatch! "/organize"))))
      [:div.modal-dialog
       [:div.loginmodal-container
        [:div.form-sign-in
         [:h2.form-sign-in-heading "Sign In"]
         [text-input-component]
         [:input.btn.btn-lg.btn-primary.btn-block
          {:type     "submit"
           :on-click login-fn}]]]])))


(do
  (defroute login "/" []
            (do
              (swap! reload-data assoc :last-page "/")
              (let [ch (chan)]
                (println "jo")
                (create-ws ch)
                (go (dispatch [:init-server-ch (<! ch)]))
                (r/render [login-page] app))))
  (defroute organize "/organize" []
            (do
              (swap! reload-data assoc :last-page "/organize")
              (r/render [organize-component] app)))
  (defroute dashboard "/dashboard" []
            (do
              (swap! reload-data assoc :last-page "/dashboard")
              (r/render [main-dashboard-component] app))))

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