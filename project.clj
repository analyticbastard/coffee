(defproject coffee "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/tools.nrepl "0.2.11"]
                 [compojure "1.5.0"]
                 [ring/ring-defaults "0.1.5"]
                 [environ "1.0.3"]
                 [jarohen/chord "0.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [reagent "0.5.1"]
                 [reagent-utils "0.1.7"]
                 [re-frame "0.7.0-alpha-2"]
                 [secretary "1.2.3"]
                 [datascript "0.15.0"]
                 ]

  :plugins [[lein-test-out "0.3.1"]
            [lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.2"]
            [lein-environ "1.0.3"]
            ]

  :main server.handler

  :source-paths ["src/main/clj" "src/main/cljs" "src/main/cljc"]

  :test-paths ["src/test/clj" "src/test/cljs"]

  :resource-paths ["src/main/resources"]

  ;:clean-targets ^{:protect false} ["src/main/resources/public/js/compiled" "target"]

  :ring {:handler server.handler/app}

  :uberjar-name "coffee.jar"

  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring/ring-mock "0.3.0"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.0-1"]
                                  ]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :source-paths ["src/dev/clj"]
                   }

             :web {:dependencies [[figwheel "0.5.0-6"]
                                  [figwheel-sidecar "0.5.0-1"]
                                  ]
                   :plugins [[lein-figwheel "0.5.0-6"]]
                   :cljsbuild {:builds [{:id "dev"
                                         :source-paths ["src/main/cljs"]

                                         ;; If no code is to be run, set :figwheel true for continued automagical reloading
                                         :figwheel {:on-jsload "coffee-client.core/on-js-reload"}

                                         :compiler {:main coffee-client.core
                                                    :asset-path "js/compiled/out"
                                                    :output-to  "src/main/resources/public/js/compiled/coffee-client.js"
                                                    :output-dir "src/main/resources/public/js/compiled/out"
                                                    :source-map-timestamp true}}
                                        ;; This next build is an compressed minified build for
                                        ;; production. You can build this with:
                                        ;; lein cljsbuild once min
                                        {:id "min"
                                         :source-paths ["src/main/cljs"]
                                         :compiler {:output-to "src/main/resources/public/js/compiled/coffee-client.js"
                                                    :main coffee-client.core
                                                    :optimizations :advanced
                                                    :pretty-print false}}]}

                   :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
                              :server-port 3449
                              ;; :server-ip "127.0.0.1"

                              :css-dirs ["src/main/resources/public/css"] ;; watch and update CSS

                              ;; Start an nREPL server into the running figwheel process
                              ;; :nrepl-port 7888

                              ;; Server Ring Handler (optional)
                              ;; if you want to embed a ring handler into the figwheel http-kit
                              ;; server, this is for simple ring servers, if this
                              ;; doesn't work for you just run your own server :)
                              ;; :ring-handler hello_world.server/handler

                              ;; To be able to open files in your editor from the heads up display
                              ;; you will need to put a script on your path.
                              ;; that script will have to take a file path and a line number
                              ;; ie. in  ~/bin/myfile-opener
                              ;; #! /bin/sh
                              ;; emacsclient -n +$2 $1
                              ;;
                              ;; :open-file-command "myfile-opener"

                              ;; if you want to disable the REPL
                              ;; :repl false

                              ;; to configure a different figwheel logfile path
                              ;; :server-logfile "tmp/logs/figwheel-logfile.log"
                              }
                   }
             :uberjar {:aot :all}
             :production {:env {:production true}}
             }
  )
