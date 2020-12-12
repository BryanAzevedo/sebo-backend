const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const users = await connection('users').select('*');

    return response.json(users);
  },

  async create(request, response) {
    const { name, email, senha, telefone, book, cep, endereco } = request.body;

    const id = crypto
      .pbkdf2Sync(senha, email, 1000, 64, `sha512`)
      .toString(`hex`);

    await connection('users').insert({
      id,
      name,
      email,
      senha,
      telefone,
      book,
      cep,
      endereco,
    });

    return response.json({ id });
  },
};
