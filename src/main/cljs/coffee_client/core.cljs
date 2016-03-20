(ns coffee-client.core
  ^:figwheel-always
  (:require [reagent.core :as r :refer [atom]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! put! close! chan]]
            [re-frame.core :refer [register-handler path register-sub dispatch dispatch-sync subscribe]]
            [goog.events :as events]
            [secretary.core :as secretary :refer-macros [defroute]]
            )
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [reagent.ratom :refer [reaction]])
  (:import goog.History
           goog.history.EventType)
  )


(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app (js/document.getElementById "app"))

(register-handler :uuid (fn [db [_ uuid]]
                          (secretary/dispatch! "/organize")
                          (assoc db :uuid uuid)
                          ))

(register-handler :organize
                  (fn [db [_ organization-info]]
                    (when organization-info
                      (secretary/dispatch! "/dashboard")
                      (merge db organization-info))))

(register-handler :choose
                  (fn [db [_ choice]]
                    (println choice)
                    (update-in db [:choice] merge choice))
                  )

(register-sub :choose
              (fn [db _] (reaction (:choice @db))))

(register-sub :organize
              (fn [db _] (reaction (:organizer @db))))

(register-sub :coffee-types
              (fn [db _] (reaction (:coffee-types @db))))

(register-sub :uuid
              (fn [db _] (reaction (:uuid @db))))

(defn receive! [server-ch]
  (let [dispatcher-fn #(let [action (:action %)
                             value  (:value %)]
                        (println "action" action value (= :choose action))
                        (when (contains? #{:organize :uuid :choose} action)
                          (println action value)
                          (dispatch [action value])))]
    (go-loop []
             (let [{:keys [message _] :as msg} (<! server-ch)]
               (when msg
                 (dispatcher-fn message)
                 (recur)))
             ))
  )

(defn send! [sever-ch msg]
  (go [] (>! sever-ch msg)))

(defn error-component [error]
  [:div
   "Couldn't connect to websocket: "
   (pr-str error)])

(defn get-count-for-coffee-type [all-users-choices coffee-name]
  [:span (str "x " (->> all-users-choices
                        vals
                        (filter #(= coffee-name %))
                        count))]
  )

(defn coffee-button-component [server-ch user-name coffee-name coffee-img]
  (let [all-users-choices @(subscribe [:choose])]
    [:li.btn.btn-default {:on-click #(send! server-ch {:action :choose :value coffee-name})
                          :class    (if (->> all-users-choices
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

(defn coffee-types [server-ch user-name]
  [:ul.btn-group-vertical
   (for [type @(subscribe [:coffee-types])]
     [coffee-button-component server-ch user-name (:name type) (:img type)])])

(defn navbar-component [page-to-switch-to]
  [:nav.navbar.navbar-default
   [:div.container-fluid
    (when (= page-to-switch-to "/dashboard")
      [:div.nav.navbar-nav.navbar-left
       [:button.navbar-btn.glyphicon.glyphicon.glyphicon-chevron-left {:on-click #(secretary/dispatch! "/dashboard")}]])
    [:p.navbar-text
     (str "Organized by " @(subscribe [:organize]))
     ]
    (when (= page-to-switch-to "/users")
      [:div.nav.navbar-nav.navbar-right
       [:button.navbar-btn.glyphicon.glyphicon-shopping-cart {:on-click #(secretary/dispatch! "/users")}]])]])

(defn coffee-user-component [server-ch user-name]
  (fn []
    [:div
     [navbar-component "/users"]
     [:div.panel.panel-default
      [:div.panel-heading [:h3.panel-title "Select your coffee"]]
      [:div.panel-body
       (when server-ch
         [coffee-types server-ch user-name])]]
     ]
    ))

(defn organize-component [server-data]
  [:div
   [:h3 "No session active"]
   [:button {:on-click #(send! @(:server-ch server-data) {:action :organize})
             }
    "Organize coffee session"]]
  )

(defn main-dashboard-component [server-data]
  (let [server-ch @(:server-ch server-data)
        user-name @(:login server-data)
        organize-info (subscribe [:organize])]
    (println "XX" user-name)
    (fn []
      (if @organize-info
        [coffee-user-component server-ch user-name]
        [organize-component server-ch]
        ))
    ))

(defn connect-to-server [user-name server-ch]
  (println "login as" user-name)
  (go (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3000/ws" {:format :transit-json}))]
        (if (or error (nil? ws-channel))
          (error-component error)
          (do
            (receive! ws-channel)
            (send! ws-channel {:action :login :user-name user-name})
            (reset! server-ch ws-channel)
            ))
        )))

(defn login-page [server-data]
  (let [user-login (:login server-data)
        server-ch (:server-ch server-data)
        text-input-component (fn []
                               [:input.form-control
                                {:type "text"
                                 :placeholder "Name"
                                 :class "form-control"
                                 :onChange #(reset! user-login (-> % .-target .-value))}])
        ]
    [:div.modal-dialog
     [:div.loginmodal-container
      [:div.form-sign-in
       [:h2.form-sign-in-heading "Sign In"]
       [text-input-component]
       [:input.btn.btn-lg.btn-primary.btn-block
        {:type     "submit"
         :on-click #(connect-to-server @user-login server-ch)}]]]]))

(defn users-dashboard-component [server-data]
  (let [choice @(subscribe [:choose])]
    [:div [navbar-component "/dashboard"]
     [:ul.list-group
      (for [user (keys choice)]
        [:li.list-group-item user (choice user)]
        )]]
    )
  )


(defonce reload-data (atom {:last-page "/"}))

(do
  (let [server-data {:server-ch (atom nil)
                     :login (atom nil)
                     :uuid (atom nil)}]
    (defroute login "/" []
              (do
                (swap! reload-data assoc :last-page "/")
                (r/render [login-page server-data] app)))
    (defroute organize "/organize" []
              (do
                (swap! reload-data assoc :last-page "/organize")
                (r/render [organize-component server-data] app)))
    (defroute dashboard "/dashboard" []
              (do
                (swap! reload-data assoc :last-page "/dashboard")
                (r/render [main-dashboard-component server-data] app)))
    (defroute users "/users" []
              (do
                (swap! reload-data assoc :last-page "/users")
                (r/render [users-dashboard-component server-data] app)))
    ))

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