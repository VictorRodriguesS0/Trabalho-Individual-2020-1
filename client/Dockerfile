FROM node:10

WORKDIR /client

COPY package.json ./

RUN yarn install


COPY . .


RUN yarn global add @vue/cli
RUN yarn global add @vue/cli-service-global