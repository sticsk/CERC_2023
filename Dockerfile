FROM node:19-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install next react react-dom

COPY . .

RUN npm run build

FROM amd64/node:19-alpine

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD [ "npm", "start" ]