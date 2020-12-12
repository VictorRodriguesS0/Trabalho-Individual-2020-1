FROM node:10

WORKDIR /client

COPY . .

RUN yarn install

RUN yarn global add @vue/cli
RUN yarn @vue/cli-service-global