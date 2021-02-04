
exports.up = function (knex) {
    return knex.schema.createTable('noticia', function (table) {
        table.increments('id_noticia');
        table.string('titulo').notNullable();
        table.string('nome_imagem').notNullable();
        table.string('link').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('noticia')
};