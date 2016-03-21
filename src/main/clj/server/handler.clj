(ns server.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [environ.core :as env]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [chord.http-kit :refer [with-channel]]
            [clojure.core.async :as async :refer [<! >! put! close! go]]
            [clojure.core.async :as a]
            [ring.middleware.resource :as resource]
            [org.httpkit.server :as server]
            [server.types :as types])
  (:import (java.util UUID)))


(def init-state {:session {:organizer nil :participants #{} :choices {}}})
(def app-state (atom init-state))

(defn respond-to-tapped-ch [ws-channel message]
  (println "multicasting message to user" message)
  (go (>! ws-channel message)))

(defn build-organize-msg [organizer-name]
  {:action :organize
   :value  {:organizer    organizer-name
            :coffee-types types/coffee-types}}
  )

(defn build-choose-msg [choices]
  {:action :choose
   :value choices}
  )

(defn respond-server-channel [chat-ch user-id user-map ws-message]
  (println "ws-message" ws-message)
  (let [message     (:message ws-message)
        login-fn #(let [user-name (:user-name message)]
                   (println user-name)
                   (swap! app-state update-in [:session :participants] conj user-name)
                   (swap! user-map assoc user-id user-name))
        organize-fn #(let [organizer-name (@user-map user-id)]
                      (println "organizer" organizer-name)
                      (swap! app-state assoc-in [:session :organizer] organizer-name)
                      (go (>! chat-ch (build-organize-msg organizer-name)))
                      )
        choose-fn #(let [user-name (@user-map user-id)]
                    (swap! app-state assoc-in [:session :choices user-name] %)
                    (go (>! chat-ch (build-choose-msg {user-name %}))))
        shutdown-fn #(do
                      (reset! app-state init-state)
                      (go (>! chat-ch {:action :shutdown})))
        ]
    (case (:action message)
      :login (login-fn)
      :organize (organize-fn)
      :choose (choose-fn (:value message))
      :shutdown (shutdown-fn)
      )
    (println "received from client" message)
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
      (a/>! ws-channel {:action :uuid :value user-id})
      (println (-> @app-state :session :organizer))
      (when-let [organizer (-> @app-state :session :organizer)]
        (a/>! chat-ch (build-organize-msg organizer)))
      (when-let [choices (-> @app-state :session :choices not-empty)]
        (println "choices" choices)
        (a/>! ws-channel (build-choose-msg choices))
        )
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
          :chat-mult chat-mult}))))


(defn wrap-dir-index [handler]
  (fn [req]
    (handler
      (update-in req [:uri]
                 #(if (= "/" %) "/index.html" %)))))

(def app-routes
  (fn [chat-chs]
    (compojure.core/routes
      (GET "/ws" [] (chord.http-kit/wrap-websocket-handler #(ws-handler % chat-chs) {:format :transit-json}))
      (route/not-found "Not Found"))))

(def app
  (-> app-routes
      with-chat-chs
      (resource/wrap-resource "public")
      wrap-dir-index
      ))


(defn -main [& [port]]
  (let [port (Integer. (or port (env/env :port) 5000))]
    (server/run-server app {:port   port
                            :format :transit-json})))