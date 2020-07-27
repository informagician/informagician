const db = require('../data/db-config')


module.exports = {
    list
}

function list(){

    return db.select('id','title','url','author','short','created_at')
        .from('articles')
}