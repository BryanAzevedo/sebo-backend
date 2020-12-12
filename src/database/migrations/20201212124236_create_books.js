exports.up = function(knex) {
  return knex.schema.createTable('books', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('autor').notNullable();
    table.string('resumo').notNullable();
    table.string('foto').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
