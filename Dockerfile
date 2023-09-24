# Use an official Node runtime as the base image
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --force

# Bundle app source
COPY . .

# Build the app
RUN npm run build