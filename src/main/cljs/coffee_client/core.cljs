(ns coffee-client.core
  ^:figwheel-always
  (:require [reagent.core :as r :refer [atom]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! put! close! chan]]
            [re-frame.core :refer [register-handler path register-sub dispatch dispatch-sync subscribe]]
            )
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [reagent.ratom :refer [reaction]])
  )

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(register-handler :organize (fn [db [_ who-organizes]] (println "handler" who-organizes) (assoc db :organize who-organizes)))

(register-sub :organize
              (fn [db _] (reaction (:organize @db))))

(defn receive! [server-ch]
  (go-loop []
           (let [{:keys [message error] :as msg} (<! server-ch)
                 message (:message message)]
             (println message)
             (when msg
               (let [action (:action message)
                     value (:value message)]
                 (println "action" action value)
                 (if (contains? #{:organize} action)
                   (dispatch [action value])))
               (recur)))
           )
  )

(defn send! [sever-ch msg]
  (go-loop [] (>! sever-ch msg)))


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


(defn coffee-select-component [server-ch]
  [:div [:h1 "Select your cofee"]
   (when server-ch
     [:div
      [:button {:on-click #(send! server-ch {:action :organize})
                }
       "Send message to server!"]])])

(defn error-component [error]
  [:div
   "Couldn't connect to websocket: "
   (pr-str error)])

(defn coffee-user-component [server-ch organize-info]
  (fn []
    [:div "Organized by" (:organized-by organize-info)]
    [:div [:h1 "Your coffee"]
     [coffee-select-component server-ch]
     ])
  )

(defn organize-component [server-ch]
  [:div
   [:button {:on-click #(send! server-ch {:action :organize})
             }
    "Send message to server!"]]
  )

(defn main-dashboard-component [server-ch]
  (let [organize-info (subscribe [:organize])]
    (fn []
      (println "info" organize-info)
      (if @organize-info
        [coffee-user-component server-ch]
        [organize-component server-ch]
        ))
    ))

(defn connect-to-server-and-put-component [user-name]
  (println "login as" user-name)
  (go (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3000/ws" {:format :transit-json}))]
        (if (or error (nil? ws-channel))
          (error-component error)
          (do
            (receive! ws-channel)
            (send! ws-channel {:action :login :user-name user-name})
            (r/render [(fn [] [main-dashboard-component ws-channel])] (.getElementById js/document "app"))))
        )))

(defn login-page []
  (let [user-name (atom nil)]
    (fn []
      [:div
       [:div.page-header [:h1 "Sign In"]]
       [text-input-component user-name :first-name "Name"]
       [:button {:type     "submit"
                 :class    "btn btn-default"
                 :on-click #(connect-to-server-and-put-component @user-name)} "OK"]])))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

(defn ^:export run
  []
  (println "XX")
  (dispatch-sync [:initialize])
  (r/render [login-page]
                  (js/document.getElementById "app")))


(defonce run-var (run))
