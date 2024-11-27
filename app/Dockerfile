# syntax=docker/dockerfile:1
FROM node:16.20.1-alpine3.18 
# node:12-alpine
RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000
