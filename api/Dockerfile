FROM node:12-alpine

WORKDIR /usr/app
COPY package*.json ./
RUN npm install -qy
COPY . .

EXPOSE 8000
CMD ["npm", "start"]
