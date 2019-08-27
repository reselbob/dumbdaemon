FROM node:8.9-alpine

WORKDIR /app
COPY . /app
RUN npm install --only-productiondic
CMD node index.js