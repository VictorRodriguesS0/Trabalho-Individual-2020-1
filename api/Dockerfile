FROM ruby:2.5.7
 
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

WORKDIR /api

# COPY ./testScripts/test-api.sh /testScripts/test.sh

COPY Gemfile /api/Gemfile
COPY Gemfile.lock /api/Gemfile.lock

RUN gem update --system
RUN gem install bundler
RUN bundle config build.nokogiri --use-system-libraries
RUN bundle check || bundle install

COPY . /api

COPY script.sh /usr/bin/
RUN chmod +x /usr/bin/script.sh
ENTRYPOINT ["script.sh"]

EXPOSE 3000

CMD [ "rails", "server", "-p", "3000", "-b", "0.0.0.0" ]