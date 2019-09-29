FROM node:12.8.0
WORKDIR /usr/app

COPY package.json .
RUN npm i

COPY . .
