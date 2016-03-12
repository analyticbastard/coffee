(ns server.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [chord.http-kit :refer [with-channel]]
            [clojure.core.async :as async :refer [<! >! put! close! go]]
            [clojure.core.async :as a])
  (:import (java.util UUID)))


(defn respond-to-tapped-ch [ws-channel]
  (fn [message]
    (println "multicasting message to user" message)
    (go (>! ws-channel message))))

(defn respond-server-channel [chat-ch user-id]
  (fn [ws-message]
    (go (>! chat-ch {:type    :message
                     :message (:message ws-message)
                     :user-id user-id}))
    (println "received from client" (-> ws-message :message :text))))



(defn ws-handler [{:keys [ws-channel] :as req} {:keys [chat-ch chat-mult]}]
  (let [tapped-ch (a/chan)
        user-id (UUID/randomUUID)]
    (a/tap chat-mult tapped-ch)
    (println (format "Opened connection from %s, user-id %s."
                     (:remote-addr req)
                     user-id))
    (go
      (a/>! chat-ch {:type :user-joined
                     :user-id user-id})
      (loop []
        (a/alt!
          tapped-ch ([message] (if message
                                 (do
                                   ((respond-to-tapped-ch ws-channel) message)
                                   (recur))
                                 (do
                                   (println "NO msg")
                                   (a/close! ws-channel))))

          ws-channel ([ws-message] (if ws-message
                                     (do
                                       ((respond-server-channel chat-ch user-id) ws-message)
                                       (recur))
                                     (do
                                       (println "Exiting")
                                       (a/untap chat-mult tapped-ch)
                                       (a/>! chat-ch {:type :user-left
                                                      :user-id user-id}))))
          )))))

(defn with-chat-chs [f]
  (let [chat-ch (a/chan)
        chat-mult (a/mult chat-ch)]
    (try
      (f {:chat-ch chat-ch
          :chat-mult chat-mult})
      #_(finally
        (a/close! chat-ch)))))

(def app-routes
  (with-chat-chs
    (fn [chat-chs]
      (compojure.core/routes
        (GET "/ws" [] (chord.http-kit/wrap-websocket-handler #(ws-handler % chat-chs) {:format :transit-json}))
        (GET "/" [] "Hello World")
        (route/not-found "Not Found")))))

