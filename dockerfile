# Base Image
FROM node:8.9

# Create App Directory
RUN mkdir /app
WORKDIR /app

# Install Dependencies
COPY package*.json /app/
RUN npm install

# Move Code
COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
