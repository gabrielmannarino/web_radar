FROM node:12

WORKDIR /app

COPY ["package.json", "package-lock.json*", "dataset.db", "./"]

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]