const express = require('express')
const cors = require('cors')
const server = express()

const ArticlesRouter = require('./router/articles')
const MediaRouter = require('./router/media')
const AuthRouter = require('./router/auth')

server.use(express.json())
server.use(cors())
server.use('/api/articles',ArticlesRouter)
server.use('/api/media',MediaRouter)
server.use('/api/auth',AuthRouter)

module.exports = server