const router = require('express').Router()
const Articles = require('../model/articles')


router.get('/',(req,res) => {
    Articles.list()
        .then(articles => {
            res.status(200).json(articles)
        })
        .catch(err => console.log(err))
})


module.exports = router