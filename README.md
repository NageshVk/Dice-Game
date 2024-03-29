# 🎲Dice Game

## Getting started

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm run dev` to start the local server


To get the frontend running locally from a container:

- Clone this repo
- Check the vite configuration file and make sure it is running on port 8080
- `docker build -t <imgName>:<version> .` to build an docker image
- `docker run -p 8080:8080 --name <containerName> <imgName>:<version>` to start the container


Check the game **[here][vercel_link]**

[vercel_link]: https://dice-game-five-bay.vercel.app/
