const express = require('express');
const router = express.Router();
const scoreController = require('../../controllers/api/scores');

router.get('/scores', scoreController.scoreIndex);
router.post('/scores', scoreController.scoreCreate);

module.exports = router;