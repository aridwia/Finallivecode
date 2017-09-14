var express = require('express');
var router = express.Router();
const userController = require('../controllers/controllerUser');

/* GET users listing. */
router.get('/', userController.getall)
router.post('/signup', userController.signup)
router.post('/signin', userController.authentikasiUser)

module.exports = router;
