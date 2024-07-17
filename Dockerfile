FROM node:18

WORKDIR /usr/src/app

RUN npm i

COPY ./src .
