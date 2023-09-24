# Build stage
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build

# Run stage
FROM node:20

# Install serve
RUN npm install -g serve

# Copy build files
COPY --from=build /app/dist /app

# Expose the serve port
EXPOSE 5000

# Run serve
CMD ["serve", "-s", "/app", "-l", "5000"]
