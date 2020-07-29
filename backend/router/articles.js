const router = require('express').Router()
const Articles = require('../model/articles')
const { fullOuterJoin } = require('../data/db-config')


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

router.get('/:id', (req,res) => {
    let url = req.params.id
    console.log('URL',url)
    Articles.findByURL(url)
        .then(article => {
            res.status(200).json(article)
        })
        .catch(err => console.log(err))
})

module.exports = router