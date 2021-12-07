const express = require('express')
const path = require('path')
const router = require('./router')

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

server.use(router)




server.listen(3030, () => console.log('Rodando'))