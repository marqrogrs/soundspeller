var Phoneme = require('../models/phoneme');

var async = require('async');
const { check, validationResult, body } = require('express-validator');

exports.index = function(req, res) {
    Phoneme.find({}, 'phoneme')
    .exec(function (err, list_phonemes) {
        if (err) { return next(err); }

        res.render('phoneme_index', { title: 'Phonemes', phonemes_list: list_phonemes });
    });
};

exports.detail = function(req, res) {
    Phoneme.findById(req.params.id)
    .exec(function (err, phoneme) {
        if (err) { return next(err); }

        res.render('phoneme_detail', { title: phoneme.phoneme, phoneme: phoneme });
    });
};

// Display phoneme create form on GET.
exports.phoneme_create_get = function(req, res) {
    res.render('phoneme_form', { title: 'Create Phoneme' });
};

// Handle phoneme create on POST.
exports.phoneme_create_post = [


    // Validate that the name field is not empty.
    check('phoneme', 'phoneme required').trim().isLength({ min: 1 }),

    // Sanitize (escape) the name field.
    body('phoneme_id').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var phoneme = new Phoneme({
            phoneme: req.body.phoneme
        });
        phoneme.soundfile.data = req.file.buffer;
        phoneme.soundfile.contentType = "audio/mpeg";


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('phoneme_form', { title: 'Create Phoneme', phoneme: phoneme, errors: errors.array()});
            return;
        }
        else {
            // Data from form is valid.
            // Check if Genre with same name already exists.
            Phoneme.findOne({ 'phoneme': req.body.phoneme })
            .exec( function(err, found_phoneme) {
                if (err) { return next(err); }

                if (found_phoneme) {
                    // Genre exists, redirect to its detail page.
                    res.redirect(""); //////// Do this
                }
                else {

                    phoneme.save(function (err) {
                        if (err) { return next(err); }
                        // Genre saved. Redirect to genre detail page.
                        res.redirect('');
                    });

                }

            });
        }
    }
];


// Display phoneme update form on GET.
exports.phoneme_update_get = function(req, res) {
    Phoneme.findById(req.params.id)
        .exec(function(err, phoneme) {
            if (err) { return next(err); }
            if (phoneme==null) { // No results.
                var err = new Error('Phoneme not found');
                err.status = 404;
                return next(err);
            }
            res.render('phoneme_form', { title: 'Update Phomeme', phoneme: phoneme });
        });
};

// Handle phoneme update on POST.
exports.phoneme_update_post = [
    // Validate that the name field is not empty.
    check('phoneme', 'phoneme required').trim().isLength({ min: 1 }),

    // Sanitize (escape) the name field.
    body('phoneme_id').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var phoneme = new Phoneme({
            phoneme: req.body.phoneme,
            _id: req.params.id
        });
        phoneme.soundfile.data = req.file.buffer;
        phoneme.soundfile.contentType = "audio/mpeg";


        if (!errors.isEmpty()) {

            Phoneme.findById(req.params.id)
                .exec(function(err, phoneme) {
                    if (err) { return next(err); }
                    if (phoneme==null) { // No results.
                        var err = new Error('Lesson not found');
                        err.status = 404;
                        return next(err);
                    }
                    res.render('phoneme_form', { title: 'Update Phoneme', phoneme: phoneme });
                });
            return;
            // There are errors. Render the form again with sanitized values/error messages.
        }
        else {
            Phoneme.findByIdAndUpdate(req.params.id, phoneme, {}, function (err,thephoneme) {
                if (err) { return next(err); }
                   // Successful - redirect to book detail page.
                   res.redirect(thephoneme.url);
                });
        }
    }
]
