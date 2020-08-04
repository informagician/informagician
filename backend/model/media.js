const db = require('../data/db-config')

module.exports = {
    list,
    add,
    findById
}

function list(){
    return db('media')
        .select('*')
}

function add(img) {
    return db('media')
        .insert(img, id)
}

function findById(id) {
    return db('media')
        .select('*')
        .where({id})
}