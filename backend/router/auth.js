const router = require('express').Router()
const Auth = require('../model/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.get('/', (req,res) => {
    res.status(200).json({message:'success'})
})

router.post('/add', (req,res) => {
    let userInfo = req.body
    res.status(200).json({message:`success`})
})

module.exports = router