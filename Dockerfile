FROM node:9.11.1
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY / ./
RUN npm run build
WORKDIR /build
CMD node server.js
EXPOSE 80