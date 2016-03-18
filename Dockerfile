FROM node:latest

RUN mkdir -p /usr/src/app /.npm
WORKDIR /usr/src/app

RUN npm install -g webpack webpack-dev-server

COPY . /usr/src/app

EXPOSE 8090
