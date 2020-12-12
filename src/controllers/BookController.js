const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const books = await connection("books").select("*");

    return response.json(books);
  },

  async create(request, response) {
    const { name, autor, resumo, foto } = request.body;

    await connection("books").insert({
      name,
      autor,
      resumo,
      foto,
    });
  },
};
