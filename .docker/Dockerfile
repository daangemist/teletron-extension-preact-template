FROM node:16.15

RUN npm i -g npm@7
RUN mkdir /app && cd /app && npm i nodemon teletron@^0.4 sqlite3 sqlite

COPY teletron-run.sh /run.sh
COPY nodemon.json /app

ENTRYPOINT [ "/run.sh" ]