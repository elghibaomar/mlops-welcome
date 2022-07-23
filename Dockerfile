FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

RUN npm install npm@latest -g

# install project dependencies

RUN npm install popperjs/core@^2.11.15

RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

# RUN npm install webpack-cli@3.3.12 --force

EXPOSE 8085
CMD [ "http-server", "dist" ]