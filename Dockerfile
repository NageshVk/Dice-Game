FROM node:alpine

WORKDIR /dice-game

COPY ./package*.json /dice-game/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]