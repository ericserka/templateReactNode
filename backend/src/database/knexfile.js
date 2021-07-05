// Update with your config settings.
const { DB_USER, DB_PASSWORD, DB_NAME } = require('../config')

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    useNullAsDefault: true,
  },
}
