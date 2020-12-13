# Solução

[![Build Status](https://travis-ci.org/VictorRodriguesS0/Trabalho-Individual-2020-1.svg?branch=master)](https://travis-ci.org/VictorRodriguesS0/Trabalho-Individual-2020-1)
[![Maintainability](https://api.codeclimate.com/v1/badges/a7b89fc83e4bdf199f8d/maintainability)](https://codeclimate.com/github/VictorRodriguesS0/Trabalho-Individual-2020-1/maintainability)

## Containerização

Para containerização do trabalho foram utilizado Docker e Docker-compose

### Como rodar o projeto:

Para rodar todo o projeto, basta executar o comando abaixo:

```bash
    docker-compose up
```

Para acessar o projeto m funcionamento, basta acessar os endpoints:

- Frontend: [http://localhost:8080/](http://localhost:8080/)
- BackEnd: [http://localhost:3000/](http://localhost:3000/)

### Como rodar os testes:

Para rodar todo os testes do projeto, basta executar os comando abaixo:

- Frontend:
```bash
    docker-compose up --build -d

    docker-compose run --rm client run test:unit
```

- BackEnd:
```bash
    docker-compose up --build -d

    docker-compose run --rm api bundle exec rails test
```

### Integração Contínua

Foram utilizados o Travis-CI para integração contínua do projeto, juntamente com o code-climate para verificar manutenibilidade do código.