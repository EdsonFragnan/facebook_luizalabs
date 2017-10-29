# Aplicação LuizaLabs facebook
- Aplicação que coleta informações de um determinado usuário do facebook e grava na base de dados.
# Start APP
- npm start (Dependência node.js instalado).
# Test APP
- npm test (Dependência mocha.js instalado).
# Cobertura de testes APP
- npm run coverage (Dependência istanbul.js instalado).
# Qualidade de código APP
- npm run qualiCode_gulp (Dependência gulp.js instalado).
# Banco de dados MySQL
- A aplicação irá criar duas bases de dados, para não misturar dados.
- A aplicação que irá criar as tabelas.
- Ambiente test: facebook_luizalabs_test
- Ambiente DEV: facebook_luizalabs
# Documentação rotas
- Navegador: http://localhost:55000/apidoc/
# Teste em Desenvolvimento
- ROTA - GET todos usuários - curl http://localhost:55000/usuarios
- ROTA - GET único usuário - curl ­http://localhost:55000/usuarios/usuario/670286562
- ROTA - GET único usuário facebook - curl ­http://localhost:55000/usuarios/facebook/670286562
- ROTA - DELETE usuário na base - curl ­-X DELETE http://localhost:55000/usuarios/usuario/670286562
- ROTA - POST Grava usuário na base - curl -­X POST -­F id=670286562 http://localhost:55000/usuarios/usuario/
