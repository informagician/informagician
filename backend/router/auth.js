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

router.post('/login', (req,res) => {
    let userData = req.body
    Auth.login(userData)
        .then(user => {
            if(user && bcrypt.compareSync(userData.password, user.password)) {
                const token = generateToken(user)
                res.status(200).json({message:'You are logged in', token})
            } else {
                res.status(401).json({errorMessage: 'Invalid Username or Password'})
            }
        })
        .catch(err => {
            res.status(500).json({errorMessage: err})
        })
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