# Base image
FROM node:16.14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the source code
COPY . .

# Expose the port on which the React app will run
EXPOSE 3000

# Start the React app
CMD ["yarn", "start:dev"]
