(ns server.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [chord.http-kit :refer [with-channel]]
            [clojure.core.async :as async :refer [<! >! put! close! go]]))

(defn ws-handler [{:keys [ws-channel] :as req}]
  (go
    (let [{:keys [message]}
          (<! ws-channel)]
      (println "Message received:" message)
      (>! ws-channel "Hello client from server!")
      ;(close! ws-channel)
      )))

(def app-routes
  (compojure.core/routes
    (GET "/ws" [] (chord.http-kit/wrap-websocket-handler ws-handler {:format :transit-json}))
    (GET "/" [] "Hello World")
    (route/not-found "Not Found")))

