from node:12.13.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
copy . .
run npm install
run npm rebuild node-sass
cmd ["npm","start"]
EXPOSE 3000