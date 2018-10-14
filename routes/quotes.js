var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var quotes_controller = require('../controllers/quotes');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', quotes_controller.test);

router.post('/create', quotes_controller.quotes_create);

module.exports = router;