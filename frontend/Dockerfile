FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first for caching
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install deps
RUN npm install

# Copy project files
COPY . .

# Expose Vite default dev port
EXPOSE 5173

# Start Vite dev server on container start
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
