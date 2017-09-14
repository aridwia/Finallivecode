const express = require('express');
const router = express.Router();
var controllerarticle = require('../controllers/controllerArticle')

router.get('/', controllerarticle.getall)
router.post('/', controllerarticle.create)

module.exports = router;
