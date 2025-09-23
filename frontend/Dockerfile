# Step 1: Use official Node.js image as the base image
FROM node:20 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the source code
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Use NGINX to serve the production build
FROM nginx:alpine

# Step 8: Copy the build directory to the NGINX html folder
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 for the app
EXPOSE 80

# Step 10: Run NGINX
CMD ["nginx", "-g", "daemon off;"]
