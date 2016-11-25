# How to do it properly so you're not using the root user
#FROM node:latest
#
#RUN useradd --user-group --create-home --shell /bin/false app &&\
#  npm install --global npm@latest
#
#ENV HOME=/home/app
#
#COPY package.json $HOME/chat/
#RUN chown -R app:app $HOME/*
#
#USER app
#WORKDIR $HOME/chat
#RUN npm install
#
#USER root
#COPY . $HOME/chat
#RUN chown -R app:app $HOME/*
#USER app
#
#CMD ["node", "index.js"]

FROM node:latest

WORKDIR /app

RUN npm install -g nodemon
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install && npm ls && npm i -g yarn
RUN mv /app/node_modules /node_modules

ADD . /app

ENV PORT 80
EXPOSE 80

CMD ["npm", "start"]
