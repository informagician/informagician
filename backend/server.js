const express = require('express')
const cors = require('cors')
const server = express()

const ArticlesRouter = require('./router/articles')

server.use(express.json())
server.use(cors())
server.use('/api/articles',ArticlesRouter)

module.exports = server