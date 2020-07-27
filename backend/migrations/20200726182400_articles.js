
exports.up = function(knex) {
  return knex.schema
    .createTable('articles', tbl => {
        tbl.increments('id')
        tbl.text('title').notNullable()
        tbl.text('url').notNullable()
        tbl.text('short').notNullable()
        tbl.text('long').notNullable()
        tbl.string('author').notNullable()
        tbl.timestamp('created_at').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('articles')
};
