const express = require('express')
const server = express()

const ArticlesRouter = require('./router/articles')

server.use(express.json())
server.use('/api/articles',ArticlesRouter)

module.exports = server