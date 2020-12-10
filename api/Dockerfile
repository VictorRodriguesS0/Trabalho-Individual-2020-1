FROM ruby:2.5.7
 
WORKDIR /api
COPY ./testScripts/test-api.sh /testScripts/test.sh

COPY ./api/Gemfile /api
COPY ./api/Gemfile.lock /api

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client



RUN gem update --system
RUN gem install bundler
RUN bundle install
RUN export RAILS_ENV=development
RUN rails db:create
RUN rails db:migrate