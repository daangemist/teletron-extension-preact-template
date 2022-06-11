# **name** extension

This is the template for building a teletron extension.

# Getting started

1. Copy the contents of this repository to an empty folder (do not include the `.git` folder)
2. Search & replace `__name__` in all files with the name of the extension you are building.
3. Replace the **name** in the title of this file.

# Development

Run `docker-compose up` two start three environments:

1. A teletron server
2. An environment that watches any changes to the backend code
3. An environment that watches any changes to the web code

## Gotcha's

Instead of `preact/hooks` you should use `preactHooks`, this is because of the shared script
that is loaded within teletron, which is exposed as `preactHooks`.

## Build / package

Run `npm run build` in both `backend` and `web` folders.

For convencience, run:

./package-extension `cat backend/package.json | jq -j '.version'`

This will also package the extension in a .tar.gz file, with the version number
from backend/package.json included. The output file can be found in `backend/`.

## Rebuild

Run the following to rebuild the teletron container and restart:

    docker-compose rm -f teletron && docker-compose build && docker-compose up
