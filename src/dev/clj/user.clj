(ns user
  (:require [org.httpkit.server :as server]
            [chord.http-kit :refer [with-channel]]
            [server.handler])
  )

(comment
  ;; start server
  (def s (server/run-server server.handler/app-routes {:port 3000
                                                       :format :transit-json}))

  ;; stop server
  (s :timeout 100)
  )


(comment
  ; to test from a ClojureScript REPL
  (require '[chord.client :refer [ws-ch]] '[cljs.core.async :refer [<! >! put! close!]])
  (require-macros '[cljs.core.async.macros :refer [go]])

  (go (let [{:keys [ws-channel error]} (<! (ws-ch "ws://localhost:3000/ws"))] (if-not error (do (>! ws-channel "Hello server from client!") (println (pr-str (:message (<! ws-channel))))) (js/console.log "Error:" (pr-str error)))))
  )