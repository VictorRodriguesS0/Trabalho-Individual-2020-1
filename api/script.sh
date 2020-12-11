#!/bin/bash
set -e

rm -f /api/tmp/pids/server.pids

rake db:create
rake db:migrate

exec "$@"