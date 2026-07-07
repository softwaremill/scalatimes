FROM node:26.4.0-alpine3.23

ENV CACHE_PATH=/app/cache/
EXPOSE 3000
VOLUME ${CACHE_PATH}

WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .

ENTRYPOINT ["node", "app.js"]

