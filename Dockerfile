# Use an official Node runtime as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --force

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Use Nginx to serve the build
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
