# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy all files to container
COPY . .

# Install dependencies
RUN npm install

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Start the app
CMD ["npm", "start"]