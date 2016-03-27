(ns coffee.schema)

(def schema
  ;; datascript admits only reference in the schema
  [{:db/ident              :session/organizer
    :db/valueType          :db.type/ref
    :db/cardinality        :db.cardinality/one
    :db/doc                "Organizer for this session"
    :db.install/_attribute :db.part/db}
   {:db/ident              :user/choice
    :db/valueType          :db.type/ref
    :db/cardinality        :db.cardinality/one
    :db/doc                "User's coffee choice"
    :db.install/_attribute :db.part/db}
   {:db/ident              :session/name
    :db/unique             :db.unique/identity
    :db/cardinality        :db.cardinality/one
    :db/doc                "Session's name identifier"
    :db.install/_attribute :db.part/db}
   {:db/ident              :user/name
    :db/unique             :db.unique/identity
    :db/cardinality        :db.cardinality/one
    :db/doc                "User's name"
    :db.install/_attribute :db.part/db}
   {:db/ident              :coffee/name
    :db/unique             :db.unique/identity
    :db/cardinality        :db.cardinality/one
    :db/doc                "User's name"
    :db.install/_attribute :db.part/db}
   ]
  )

(defn get-session-name []
  "session")

(defn create-schema []
  (into {} (map #(hash-map (:db/ident %) (dissoc % :db/ident)) schema)))