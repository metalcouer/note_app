// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgre://localhost/flashcards_db'
  },

  production: {
    client: 'pg',
    connection: 'process.env.DATABASE_URL'
  },


};
