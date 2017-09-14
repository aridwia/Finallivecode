const express = require('express');
const router = express.Router();
var controllerarticle = require('../controllers/controllerArticle')

router.get('/', controllerarticle.getall)
router.post('/', controllerarticle.create)
router.get('/:id', controllerarticle.getone)
router.put('/:id', controllerarticle.update)
router.delete('/:id', controllerarticle.remove)
router.get('/getauthor', controllerarticle.getauthor)

module.exports = router;
