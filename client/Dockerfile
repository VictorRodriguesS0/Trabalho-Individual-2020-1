FROM node:latest

RUN mkdir /client

WORKDIR /client

COPY . /client

RUN yarn install

CMD ["yarn", "run", "dev"]