
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', tbl => {
        tbl.increments();
    
        tbl.string('title').notNullable();
        tbl.string('genre').notNullable();
        tbl.integer('releaseYear', 4);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('games');
};
