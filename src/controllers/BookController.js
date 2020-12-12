const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const books = await connection('books').select('*');

    return response.json(books);
  },

  async create(request, response) {
    const { name, autor, resumo, foto } = request.body;

    const [id] = await connection('books').insert({
      name,
      autor,
      resumo,
      foto,
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection('books')
      .where('id', id)
      .select('id')

      .delete();

    return response.status(204).send();
  },
};
