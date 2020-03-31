var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/apiController');

/// Lesson ROUTES ///

// GET catalog home page.
router.get('/lessons', api_controller.index);


module.exports = router;
