var express = require('express');
var router = express.Router();
const userController = require('../controllers/controllerUser');

/* GET users listing. */
router.get('/', userController.getall)

module.exports = router;
