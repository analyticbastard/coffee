# Junk Food Friday

Formerly coffee, is a lightweight application to place orders for a menu that
can consist of different sections, allowing one selection per section per
customer.

The architecture takes client-server information flow to its simplest and most
maintainable extension.

## Prerequisites

You will need [Leiningen][] 2.0.0 or above installed.

[leiningen]: https://github.com/technomancy/leiningen

## Running

Ring does not support web sockets, so the internal HTTP kit web server must
be started by running the main program

    lein with-profile web run

## License

Copyright © 2016 The Analytic Bastard
