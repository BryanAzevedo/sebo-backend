const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const { name, email, senha, telefone, book, cep, endereco } = request.body;

  return response.json({});
});

module.exports = routes;
