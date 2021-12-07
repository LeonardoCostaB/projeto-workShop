const express = require('express')
const ideaController = require('./controller/ideiaController')

const router = express.Router()

router.get('/', ideaController.createIndex)
router.get('/ideias', ideaController.createIdea)

router.post('/ideas/:title/:category/:image/:description/:link', ideaController.newIdea)

module.exports = router