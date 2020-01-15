const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/users');

router.post('/signup', userController.userCreate);

module.exports = router;