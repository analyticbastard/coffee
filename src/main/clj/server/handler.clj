(ns server.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [chord.http-kit :refer [with-channel]]
            [clojure.core.async :as async :refer [<! >! put! close! go]]
            [clojure.core.async :as a])
  (:import (java.util UUID)))


(def app-state (atom {:session {:organizer nil :participants []}}))

(defn respond-to-tapped-ch [ws-channel message]
  (println "multicasting message to user" message)
  (go (>! ws-channel message)))

(defn respond-server-channel [chat-ch user-id user-map ws-message]
  (let [message (:message ws-message)
        login-fn #(let [user-name (:user-name message)]
                   (println user-name)
                   (swap! app-state update-in [:session :participants] conj user-name)
                   (swap! user-map assoc user-id user-name))
        organize-fn #(let [user-name (@user-map user-id)]
                      (println "organizer" user-name)
                      (swap! app-state assoc-in [:session :organizer] user-name)
                      (go (>! chat-ch {:type    :message
                                       :message {:action :organize :value user-name}
                                       :user-id user-id}))
                      )
        ]
    (case (:action message)
      :login (login-fn)
      :organize (organize-fn))
    (println "received from client" (-> message :message :text))
    ))



(defn ws-handler [{:keys [ws-channel] :as req} {:keys [chat-ch chat-mult]}]
  (let [tapped-ch (a/chan)
        user-id (UUID/randomUUID)
        user-map (atom {})]
    (a/tap chat-mult tapped-ch)
    (println (format "Opened connection from %s, user-id %s."
                     (:remote-addr req)
                     user-id))
    (go
      (a/>! ws-channel {:type    :user-joined
                        :message {:action :uuid :value user-id}
                        :user-id user-id})
      (when-let [organizer (-> @app-state :session :organizer)]
        (a/>! chat-ch {:type    :user-joined
                       :message {:action :organize :value organizer}
                       :user-id user-id}))
      (loop []
        (a/alt!
          tapped-ch ([message] (if message
                                 (do
                                   (respond-to-tapped-ch ws-channel message)
                                   (recur))
                                 (do
                                   (println "NO msg")
                                   (a/close! ws-channel))))

          ws-channel ([ws-message] (if ws-message
                                     (do (respond-server-channel chat-ch user-id user-map ws-message)
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

