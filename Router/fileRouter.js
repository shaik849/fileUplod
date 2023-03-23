const router = require('express').Router();

const {postFile} = require('../Controller/fileController')

router.post('/', postFile) 


module.exports = router