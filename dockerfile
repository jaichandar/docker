FROM node:21.1.0-bookworm-slim

WORKDIR /docker/app

COPY package*.json /docker/app/

RUN npm install

COPY . /docker/app/

EXPOSE 4000

ENTRYPOINT [ "npm", "start" ]