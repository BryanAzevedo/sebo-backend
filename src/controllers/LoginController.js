const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { email, senha } = request.body;

    const check = crypto
      .pbkdf2Sync(senha, email, 1000, 64, `sha512`)
      .toString(`hex`);

    const user = await connection('users')
      .where('id', check)
      .select('*')
      .first();

    if (!user) {
      return response.status(400).json({ error: 'Não há cadastro' });
    }

    return response.json(user);
  },
};
