FROM node:26.12.1-alpine3.23@sha256:bc2b334006f15c7167bbeb2f08f28c2df883f7594a0470e04454ebe7560cfe68

ENV CACHE_PATH=/app/cache/
EXPOSE 3000
VOLUME ${CACHE_PATH}

RUN apk upgrade --no-cache

WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .

ENTRYPOINT ["node", "app.js"]
