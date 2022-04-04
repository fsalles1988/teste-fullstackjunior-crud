API-REST_CRUD
Projeto de CRUD feito em nodejs usando o express, Banco de dados Postgres
DOCKER e DOCKER-COMPOSER

Para manipulação do projeto node e deixar rodando enquanto fossem feitos alterações foi utilizado o seguinte comando...

--- nodemon src/serve.js

# Banco de dados Postgres

Utilizado o knex para configuração de comunicação com o banco Postgres e instalação da blibioteca responsável pela comunicação 

INSTALANDO O KNEX
--- npm install knex --save

INSTALANDO A BIBLIOTECA
--- npm install pg

Utilizado framework express para o gerenciamento da rotas

INSTALANDO O EXPRESS
--- npm install express --save

Feita a criação da imagem do docker 
Utilizado o comando...
--- docker build -t postgress

Documentação feita em Yaml
