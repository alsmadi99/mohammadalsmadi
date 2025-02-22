# Build stage
FROM node:20 AS build

ARG VITE_LITLY_PROJECT_ID
ARG VITE_GITHUB_TOKEN

ENV VITE_LITLY_PROJECT_ID=$VITE_LITLY_PROJECT_ID
ENV VITE_GITHUB_TOKEN=$VITE_GITHUB_TOKEN

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN npm install -g yarn --force

RUN yarn

COPY . .
RUN yarn run build

# Run stage
FROM node:20

WORKDIR /app

# Install serve or any static file server you prefer
RUN npm install -g serve

# Copy build files from the build stage
COPY --from=build /app/dist /app

# Expose the serve port
EXPOSE 5000

# Run serve
CMD ["serve", "-s", "/app", "-l", "5000"]