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
    :db/cardinality        :db.cardinality/many
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
    :db/doc                "Coffee name"
    :db.install/_attribute :db.part/db}
   {:db/ident              :section/name
    :db/unique             :db.unique/identity
    :db/cardinality        :db.cardinality/one
    :db/doc                "Section name"
    :db.install/_attribute :db.part/db}
   {:db/ident              :coffee/section
    :db/cardinality        :db.cardinality/one
    :db/valueType          :db.type/ref
    :db/doc                "Menu section"
    :db.install/_attribute :db.part/db}
   {:db/ident              :choice/name
    :db/unique             :db.unique/identity
    :db/cardinality        :db.cardinality/one
    :db/doc                "Choice lookup ref"
    :db.install/_attribute :db.part/db}
   {:db/ident              :choice/section
    :db/cardinality        :db.cardinality/one
    :db/valueType          :db.type/ref
    :db/doc                "Choice section"
    :db.install/_attribute :db.part/db}
   {:db/ident              :choice/item
    :db/cardinality        :db.cardinality/one
    :db/valueType          :db.type/ref
    :db/doc                "Choice item"
    :db.install/_attribute :db.part/db}
   ]
  )

(defn get-session-name []
  "session")

(defn create-schema []
  (into {} (map #(hash-map (:db/ident %) (dissoc % :db/ident)) schema)))