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
            [datascript.core :as d]
            [coffee.schema]
            [server.types :as types]
            )
  (:import (datascript.db Datom)))


(defn init-state [] (let [session-name (coffee.schema/get-session-name)
                          conn (d/create-conn (coffee.schema/create-schema))]
                      (d/transact! conn [{:db/id -1 :session/name session-name}])
                      {:conn conn}))
(def app-state (atom (init-state)))

(defn send! [ch msg]
  (println "send!" msg)
  (go (>! ch msg)))

(defn process-command [message]
  (let [command (:command message)]
    (case command
      :shutdown (do
                  (reset! app-state (init-state))))))

(defn respond-to-tapped-ch [ws-channel message]
  (println "multicasting message to user" message)
  (send! ws-channel message))

(defn datom->vec [datom]
  (if (instance? Datom datom)
    (mapv identity datom)
    datom))

(defn op-eav [datom-vec]
  #_(println (last datom-vec))
  (let [eav (take 3 datom-vec)]
    (if (last datom-vec)
      (cons :db/add eav)
      (cons :db/retract eav)
      )))

(defn respond-server-channel [chat-ch ws-message]
  (let [message (:message ws-message)
        conn    (:conn @app-state)
        tx-data (:datascript-tx message)
        tx-data (when tx-data
                  (:tx-data (d/transact! conn tx-data)))
        ]
    (println "received" message)
    (println "processed" tx-data)
    (if tx-data
      (send! chat-ch (mapv (comp op-eav datom->vec) tx-data))
      (do
        (process-command message)
        (send! chat-ch message)))
    ))


(defn ws-handler [{:keys [ws-channel] :as req} {:keys [chat-ch chat-mult]}]
  (let [tapped-ch (a/chan)
        conn (:conn @app-state)
        init-tx   (mapv (comp op-eav datom->vec) (d/datoms (d/db conn) :eavt))]
    (a/tap chat-mult tapped-ch)
    (println (format "Opened connection from %s`."
                     (:remote-addr req)))
    (go
      (when (not-empty init-tx)
        (send! ws-channel init-tx))
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
                                     (do (respond-server-channel chat-ch ws-message)
                                         (recur))
                                     (do
                                       (println "Exiting")
                                       (a/untap chat-mult tapped-ch)
                                       #_(a/>! chat-ch {:type :user-left
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