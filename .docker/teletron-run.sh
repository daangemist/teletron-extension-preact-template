#!/bin/bash
set -e

export EXTENSIONS=/extensions
mkdir -p /extensions && cd /extensions
echo '{"dependencies":{"extension-sentry":"file:../build"}}' > package.json
npm install

# Run teletron, no data initialization is necessary for this extension.
cd /app
echo "Starting teletron... Access at http://localhost:$PORT/"
./node_modules/.bin/nodemon --exec npx teletron

