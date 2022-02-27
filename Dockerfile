FROM node:fermium-alpine

COPY . .

RUN npm install --production