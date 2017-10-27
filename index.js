"use strict";

const app = require('./config/custom-express')();
const porta = process.env.PORT || 55000;

app.listen(porta, () => {
  console.log('Servidor rodando na porta: ', porta);
});

module.exports = app;
