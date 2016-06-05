# Junk Food Friday

Formerly coffee, is a lightweight application to place orders for a menu that
can consist of different sections, allowing one selection per section per
customer.

The architecture takes client-server information flow to its simplest and most
maintainable extension.

## Prerequisites

You will need [Leiningen][] 2.0.0 or above installed.

[leiningen]: https://github.com/technomancy/leiningen

## Before running

You need to compile the Clojurescript source into Javascript resources

    lein with-profile web cljsbuild once

## Running

Ring does not support web sockets, so the internal HTTP kit web server must
be started by running the main program

    lein with-profile web run


## Architecture

The program is architectured as a MVC forward information flow, with the client
and server sharing the state and with reactive model and view components. All
of this provides a fully declarative code.

### Forward information flow

The information flow is unidirectional only-forward. This means that changes
made at a stage will never affect previous stages. In this case, choosing an
item or making a new menu section will not involve any process other than
the view updating itself to reflect the changes in the state. This is achieved
by the MVC architecture and reactive model and view components. The MVC
is provided by [reagent](https://github.com/reagent-project/reagent) and
[re-frame](https://github.com/Day8/re-frame).

### Client/server state sharing

By using [datascript](https://github.com/tonsky/datascript),
the only thing we send over the network is valid
json-marshalled datascript transaction EDN data. The client creates transaction
data using temporary identifiers and sends them to the server. The server
transacts them into its database, creating *datoms* with effective identifiers,
which are sent back to the client for it to transact to its own DB. Thus,
the state is shared between them.

### Reactive model and view

We take a step forward from plain MVC and use the reactive capabilities of
[reagent](https://github.com/reagent-project/reagent) to render itself upon
atom changes, which provides a view which is self-refreshed. Furthermore,
by using [datascript](https://github.com/tonsky/datascript) pub/sub capabilities
(via listeners), we achieve model reactions so that the view updating is
completely declarative, in the form of a standard datascript query.

### Fully declarative

All three model, view and controller are declarative in the sense that they
specify *what* needs to be done, not *how* it should be done, thanks to the
technologies above.

## License

Copyright © 2016 The Analytic Bastard
Distributed under the Eclipse Public License, the same as Clojure.