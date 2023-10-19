# Use a base image with Node.js to build the React app
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN yarn run build

# Use a lightweight production image
FROM nginx:alpine

# Copy the built React app from the build to the nginx web server's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default port used by nginx
EXPOSE 80

# Command to start the nginx server
CMD ["nginx", "-g", "daemon off;"]