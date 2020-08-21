const router = require('express').Router()
const Auth = require('../model/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const restricted = require('../middleware/restricted')

router.get('/', (req,res) => {
    res.status(200).json({message:'success'})
})

router.post('/add', (req,res) => {
    let user = req.body
    Auth.add(user)
        .then(user => {
            res.status(200).json({message:`${user}`})
        })
        .catch(err => console.log(err))
})

module.exports = router

function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, jwtsecret, options)
}