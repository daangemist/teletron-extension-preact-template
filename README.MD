# **name** extension

This is the template for building a teletron extension using preact.

# Getting started

1. Copy the contents of this repository to an empty folder (do not include the `.git` folder)
2. Search & replace `__name__` in all files with the name of the extension you are building.
3. Replace the **name** in the title of this file.
4. Update the README

# Development

Run `docker-compose up` two start three environments:

1. A teletron server
2. An environment that watches any changes to the backend code
3. An environment that watches any changes to the web code

## Gotcha's

When importing a module for web, if you want to have it inlined into the bundle, add it as a
dev dependency in your `package.json`. For more details, read
(How Microbundle decides which dependencies to bundle)[https://github.com/developit/microbundle/wiki/How-Microbundle-decides-which-dependencies-to-bundle]

## Build / package

Run:

    ./package-extension

This will package the extension in a .tar.gz file, with the `package.json` and `teletron.json`
from backend/package.json included. The output file can be found in `backend/`.

## Rebuild

Run the following to rebuild the teletron container and restart:

    docker-compose rm -f teletron && docker-compose build && docker-compose up
