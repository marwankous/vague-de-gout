FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the 11ty port
EXPOSE 8080

CMD ["npm", "start"]
