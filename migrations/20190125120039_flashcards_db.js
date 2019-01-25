
exports.up = function(knex, Promise) {
    return knex.schema.createTable('flashcards', table => {
        table.increments()
        table.string('name').notNullable().defaultsTo('')
      })
};

exports.down = function(knex, Promise) {
  
};
