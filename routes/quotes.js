var express = require('express');
var router = express.Router();


var quotes_controller = require('../controllers/quotes');

router.get('/', quotes_controller.test);

router.post('/create', quotes_controller.quotes_create);

module.exports = router;
