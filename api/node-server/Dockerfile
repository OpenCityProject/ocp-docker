FROM node:latest

# Create api directory
RUN mkdir /api
WORKDIR /api

RUN npm install -g nodemon

# Install app dependencies
ADD ./package.json /api/package.json
RUN npm install

# Bundle app source
COPY . /api

CMD ["npm", "start"]