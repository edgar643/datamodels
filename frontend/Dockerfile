FROM node:16-alpine as builder
# Create the app directory
WORKDIR /app
# Copy dependency definitions
COPY package*.json ./
# Install the required dependencies
RUN npm ci
# Copy app files
COPY . .
# Build the front end app to be distributed
RUN npm run build
# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as development
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your default.conf.template for nginx's env variables
COPY default.conf.template /etc/nginx/templates/default.conf.template
# Expose port
EXPOSE 80
# Start and run the nginx
CMD ["nginx", "-g", "daemon off;"]