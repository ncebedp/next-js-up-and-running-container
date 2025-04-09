FROM node:latest

# Install inotify-tools for efficient file watching
RUN apt-get update && apt-get install -y inotify-tools && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
# COPY S D
COPY . .

# Expose the Next.js development server port
EXPOSE 3000

# Start Next.js in development mode
CMD ["npm", "run", "dev"]