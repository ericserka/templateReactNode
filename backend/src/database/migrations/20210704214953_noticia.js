const tableName = 'noticia'

exports.up = async (knex) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id')
    table.string('link').notNullable()
    table.timestamps(true, true) //adiciona created_at e updated_at como colunas da tabela
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable(tableName)
}
