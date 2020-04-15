var express = require('express');
var router = express.Router();

// Require controller modules.
var word_controller = require('../controllers/wordController');

/// word ROUTES ///
router.get("/:id", word_controller.word_detail);

/*
// GET request for creating a word. NOTE This must come before routes that display word (uses id).
router.get('/create', word_controller.word_create_get);

// POST request for creating word.
router.post('/create', word_controller.word_create_post);

// GET request to update word.
router.get('/:id/update', word_controller.word_update_get);

// POST request to update word.
router.post('/:id/update', word_controller.word_update_post);
*/

// Deletion should be done in the mongoDB cloud.

module.exports = router;
