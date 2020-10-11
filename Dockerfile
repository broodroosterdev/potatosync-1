FROM node:10.21.0-alpine
# Create Directory for the Container
WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN yarn --network-timeout 100000
# Copy all other source code to work directory
ADD . /usr/src/app
ENV NODE_ENV=production
RUN yarn build-ts
# Start
CMD [ "yarn", "serve" ]
EXPOSE 3000
