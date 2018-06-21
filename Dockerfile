FROM node:10

ENV CACHE_PATH=/app/cache/
EXPOSE 3000
VOLUME ${CACHE_PATH}

WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .

ENTRYPOINT ["node", "app.js"]

