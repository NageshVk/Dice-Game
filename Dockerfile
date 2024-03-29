FROM node:alpine

WORKDIR /dice-game

COPY ./package*.json /dice-game/

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","run","dev"]
