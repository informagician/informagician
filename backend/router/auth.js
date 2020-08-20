const router = require('express').Router()
const Auth = require('../model/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.get('/', (req,res) => {
    res.status(200).json({message:'success'})
})

router.post('/add', (req,res) => {
    let userInfo = req.body
    Auth.add(userInfo)
        .then(user => {
            res.status(200).json({message:`${user}`})
        })
        .catch(err => console.log(err))
})

module.exports = router