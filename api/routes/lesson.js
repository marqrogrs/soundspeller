var express = require('express');
var router = express.Router();

// Require controller modules.
var lesson_controller = require('../controllers/lessonController');

/// Lesson ROUTES ///

// GET catalog home page.
router.get('/', lesson_controller.index);

// GET request for creating a lesson. NOTE This must come before routes that display lesson (uses id).
router.get('/create', lesson_controller.lesson_create_get);

// POST request for creating lesson.
router.post('/create', lesson_controller.lesson_create_post);

// GET request to update lesson.
router.get('/:id/update', lesson_controller.lesson_update_get);

// POST request to update lesson.
router.post('/:id/update', lesson_controller.lesson_update_post);



module.exports = router;
