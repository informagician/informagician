
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments('id')
        tbl.string('username',64).notNullable().unique()
        tbl.string('password').notNullable()
        tbl.timestamp('created_at').notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users')
  };
