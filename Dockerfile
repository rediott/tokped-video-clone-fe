# Use a base image suitable for building your React app (e.g., Node.js)
FROM node:14 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code
COPY . .

# Build the frontend app
RUN npm run build

# Stage 2: Create a lightweight production image
FROM nginx:alpine

# Copy the built frontend app from the builder stage to the production image
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the port that Nginx listens on do not change the port
EXPOSE 3000

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
