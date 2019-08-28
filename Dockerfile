FROM node:12.9.0-alpine
RUN apk --no-cache update && \
    apk --no-cache add git && \
    rm -fr /var/cache/apk/*
ENV NODE_ENV production
ENV CI true
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --dev
COPY / ./
RUN npm run build
RUN npm prune --production
WORKDIR /build
CMD node server.js
EXPOSE 80
