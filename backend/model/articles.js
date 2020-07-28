const db = require('../data/db-config')


module.exports = {
    list,
    create
}

function list(){

    return db.select('id','title','url','author','short','created_at')
        .from('articles')
}

function findById(id){
    return db('articles')
        .select('*')
        .where({id})
        .first()
}

function create(article){
    return db('articles')
        .insert(article, 'id')
        .then(ids => {
            findById(ids)
        })
}