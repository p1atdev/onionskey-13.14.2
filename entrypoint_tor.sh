#!/bin/sh

chown -R root /etc/tor
chmod 700 -R /etc/tor/hidden_service

exec "$@"
