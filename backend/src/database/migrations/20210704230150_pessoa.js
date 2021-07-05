const tableName = 'pessoa'

exports.up = async (knex) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id')
    table.string('nome').notNullable()
    table.timestamps(true, true) //adiciona created_at e updated_at como colunas da tabela
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable(tableName)
}
