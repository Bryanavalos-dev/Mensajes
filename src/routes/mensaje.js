const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);

router.get('/add/', customerController.add);
router.post('/add/', customerController.agregar);

module.exports = router;