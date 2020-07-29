const db = require('../data/db-config')


module.exports = {
    list,
    create,
    findById,
    findByURL
}

function list(){

    return db.select('id','title','url','author','short','created_at')
        .from('articles')
        .orderBy('created_at', 'desc')
}

function findById(id){
    return db('articles')
        .select('*')
        .where({id})
        .first()
}

function findByURL(url) {
    return db('articles')
        .select('*')
        .where({url})
        .first()
}

function create(article){
    return db('articles')
        .insert(article, 'id')
        .then(ids => {
            findById(ids)
        })
}