const db = require('../data/db-config')

module.exports = {
    list,
    add
}

function list() {
    return db('users')
        .select('*')
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            return findById(ids)
        })
}

function findById(id){
    return db('users')
        .select('*')
        .where({id})
}