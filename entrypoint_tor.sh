#!/bin/sh

chmod 700 /etc/tor/hidden_service

exec "$@"
