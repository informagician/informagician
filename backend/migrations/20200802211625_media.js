
exports.up = function(knex) {
    return knex.schema
        .createTable('media', tbl => {
            tbl.increments('id')
            tbl.string('name').notNullable()
            tbl.timestamp('created_at')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('media')
};
