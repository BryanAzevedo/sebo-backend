exports.up = function(knex) {
  knex.schema.createTable('users', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('senha').notNullable();
    table.string('telefone').notNullable();
    table.string('book').notNullable();
    table.string('cep').notNullable();
    table.string('endereco').notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('user');
};
