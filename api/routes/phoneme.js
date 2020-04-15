var express = require('express');
var router = express.Router();
var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var Phoneme = require('../models/phoneme');

// Require controller modules.
var phoneme_controller = require('../controllers/phonemeController');

/// Lesson ROUTES ///

// GET catalog home page.
router.get('/', phoneme_controller.index);

router.get('/:id', phoneme_controller.detail);

// GET request for creating a phoneme. NOTE This must come before routes that display phoneme (uses id).
router.get('/create', phoneme_controller.phoneme_create_get);

// POST request for creating phoneme.
router.post('/create', upload.single("soundfile"), function(req, res, next) {
    var phoneme = new Phoneme({
        phoneme: req.body.phoneme
    });
    phoneme.soundfile.data = req.file.buffer;
    phoneme.soundfile.contentType = "audio/mpeg";
    phoneme.save(function (err) {
        if (err) { return next(err); }
        // Genre saved. Redirect to genre detail page.
        res.redirect('');
    });
});

// GET request to update phoneme.
router.get('/:id/update', phoneme_controller.phoneme_update_get);

// POST request to update phoneme.
router.post('/:id/update', phoneme_controller.phoneme_update_post);



module.exports = router;
