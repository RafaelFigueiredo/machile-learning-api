// EXPRESS
const express = require('express');
const router = express.Router();

const controller = require('../controllers/fraudController')
router.post('/predict', controller.predict);
router.post('/fit', controller.fit);

module.exports = router;