const router = require('express').Router()
const Articles = require('../model/articles')


router.get('/',(req,res) => {
    Articles.list()
        .then(articles => {
            res.status(200).json(articles)
        })
        .catch(err => console.log(err))
})

router.post('/new',(req,res) => {
    let url = req.body.title
    url = url.replace(/\s/g, '-').toLowerCase()
    req.body.url = url
    console.log(req.body)
    Articles.create(req.body)
        .then(article => {
            res.status(201).json(article)
        })
        .catch(err => console.log(err))
})

module.exports = router