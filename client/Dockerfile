FROM node:10

WORKDIR /client

COPY package.json ./

RUN yarn install


COPY . .


RUN yarn global add @vue/cli
RUN yarn global add @vue/cli-service-global
RUN yarn add codecov@3.8.1
RUN bash <(curl -s https://codecov.io/bash)