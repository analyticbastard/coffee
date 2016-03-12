(ns client.core
  (:require [reagent.core :as reagent :refer [atom]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! put! close! chan]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  )

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn receive! [server-ch]
  (go-loop []
           (println "XX")
           (let [{:keys [message error] :as msg} (<! server-ch)]
             (when message
               (println message)
               (recur)))
           )
  )

(defn send! [new-msg-ch sever-ch]
  (go-loop []
           (when-let [msg (<! new-msg-ch)]
             (>! sever-ch msg)
             (recur))))

(defn coffee-user-component [server-ch]
  [:div [:h1 "Select your cofee"]

   (when server-ch
     [:div
      [:button {:on-click #(put! server-ch {:text "hey"})
                }
       "Send message to server!"]])])

#_(reagent/render-component [coffee-user-component nil]
                            (. js/document (getElementById "app")))


(go
  (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3000/ws" {:format :transit-json}))
        server-ch ws-channel
        new-msg-ch (chan)]
    (receive! server-ch)
    (if error
      ;; connection failed, print error
      (reagent/render-component
        [:div
         "Couldn't connect to websocket: "
         (pr-str error)]
        (. js/document (getElementById "app")))

      (reagent/render-component
        [coffee-user-component server-ch]
        (. js/document (getElementById "app"))))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
