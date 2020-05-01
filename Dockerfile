# www
FROM node:12-alpine as www

WORKDIR /usr/app/www/
COPY www/package*.json ./
RUN npm install -qy
COPY www/ ./

RUN npm run build

# api
FROM node:12-alpine

WORKDIR /usr/app/
COPY --from=www /usr/app/www/build/ ./www/build/

WORKDIR /usr/app/api/
COPY api/package*.json ./
RUN npm install -qy
COPY api/ ./

ENV PORT 8000
EXPOSE 8000

CMD ["npm", "start"]
