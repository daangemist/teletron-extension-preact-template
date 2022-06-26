FROM ghcr.io/daangemist/teletron:0.7.0

WORKDIR /app
RUN npm i nodemon

COPY teletron-run.sh /run.sh
COPY nodemon.json /app
COPY launch-config.json /app

ENTRYPOINT [ "/run.sh" ]