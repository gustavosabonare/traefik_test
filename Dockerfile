FROM node:latest

WORKDIR /traefik_app

COPY package*.json ./
RUN ["npm", "install"]

COPY . .