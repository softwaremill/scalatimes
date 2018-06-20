FROM node:10

ENV CACHE_PATH=/app/cache
WORKDIR /app
RUN mkdir -p ${CACHE_PATH}
COPY  package*.json ./
RUN npm install
COPY . .

ENTRYPOINT ["node", "app.js"]

