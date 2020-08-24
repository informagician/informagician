const router = require('express').Router()
const Auth = require('../model/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const restricted = require('../middleware/restricted')

router.get('/', (req,res) => {
    Auth.list()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => console.log(err))
})

router.post('/add', (req,res) => {
    let user = req.body
    user.password = bcrypt.hashSync(user.password, 13)
    Auth.add(user)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => console.log(err))
})

router.post('/login', (req,res) => {
    let userData = req.body
    console.log(userData)
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

router.delete('/delete/:id', (req,res) => {
    let id = req.params

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