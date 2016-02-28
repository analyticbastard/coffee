(ns client.core
  (:require [reagent.core :as reagent :refer [atom]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >! put! close!]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  )

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn hello-world []
  [:div [:h1 (:text @app-state)]
   [:div
    [:button {:on-click #(go (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3000/ws"))]
                               (if-not error
                                 (>! ws-channel "Hello server from client!")
                                 (println "Error:" (pr-str error)))))
              }
     "Send message to server!"]]])

(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
