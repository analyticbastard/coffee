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
                          (println "handler" uuid)
                          (secretary/dispatch! "/organize")
                          (assoc db :uuid uuid)
                          ))

(register-handler :organize
                  (fn [db [_ organization-info]]
                    (println "organize" organization-info)
                    (when organization-info
                      (secretary/dispatch! "/dashboard")
                      (merge db organization-info))))

(register-sub :organize
              (fn [db _] (reaction (:organizer @db))))

(register-sub :coffee-types
              (fn [db _] (reaction (:coffee-types @db))))

(register-sub :uuid
              (println "sub")
              (fn [db _] (reaction (:uuid @db))))

(defn receive! [server-ch]
  (go-loop []
           (let [{:keys [message error] :as msg} (<! server-ch)]
             (when msg
               (let [action (:action message)
                     value (:value message)]
                 (println "action" action value)
                 (if (contains? #{:organize :uuid} action)
                   (dispatch [action value])))
               (recur)))
           )
  )

(defn send! [sever-ch msg]
  (go [] (>! sever-ch msg)))


(defn row-component [label & body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-3 body]])

(defn text-input-component [doc id label]
  [row-component label
   [:input {:type "text"
            :class "form-control"
            ;:value (id @doc)
            :onChange #(reset! doc (-> % .-target .-value))}]])


(defn error-component [error]
  [:div
   "Couldn't connect to websocket: "
   (pr-str error)])

(defn coffee-user-component [server-ch]
  (fn []
    [:div [:h1 "Select your coffee"]
     [:div (str "Organized by " @(subscribe [:organize]))]
     (when server-ch
       [:ul
        (for [type @(subscribe [:coffee-types])]
          [:li #_{:on-click #(send! server-ch {:action :organize})}
           [:img {:src (:img type)
                  :width "20px"}]
           (:name type)
           ])])])
  )

(defn organize-component [server-data]
  [:div
   [:button {:on-click #(send! @(:server-ch server-data) {:action :organize})
             }
    "Send message to server!"]]
  )

(defn main-dashboard-component [server-data]
  (let [server-ch @(:server-ch server-data)
        organize-info (subscribe [:organize])]
    (fn []
      (println "info" @organize-info)
      (if @organize-info
        [coffee-user-component server-ch]
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
        server-ch (:server-ch server-data)]
    [:div
     [:div.page-header [:h1 "Sign In"]]
     [text-input-component user-login :first-name "Name"]
     [:button {:type     "submit"
               :class    "btn btn-default"
               :on-click #(connect-to-server @user-login server-ch)} "OK"]]))


(defonce reload-data (atom {:last-page "/"}))

(def defroutes
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
                (r/render [main-dashboard-component server-data] app)))))

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