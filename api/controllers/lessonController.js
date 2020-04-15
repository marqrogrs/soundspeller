var Lesson = require('../models/lesson');
var Word = require('../models/word');

var async = require('async');
const { check, validationResult, body } = require('express-validator');

exports.index = function(req, res, next) {
    Lesson.find({})
    .populate("words")
    .exec(function (err, list_lessons) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('index', { title: 'Lessons', lesson_list: list_lessons });
    });
};

// Display lesson create form on GET.
exports.lesson_create_get = function(req, res) {
    res.render('lesson_form', { title: 'Create Lesson' });
};

// Handle lesson create on POST.
exports.lesson_create_post = [

    // Convert the words to an array
    (req, res, next) => {
        if(!(req.body.words instanceof Array)){
            if(typeof req.body.words==='undefined')
                req.body.words = [];
            else
                req.body.words = req.body.words.trim().split(" ") //.split(/,\s*|\s{2,}/);
        }
        next();
    },
    // Validate that the name field is not empty.
    check('lesson_id', 'lesson_id required').trim().isLength({ min: 1 }),

    // Sanitize (escape) the name field.
    body('lesson_id').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var lesson = new Lesson({
            lesson_id: req.body.lesson_id,
            words: req.body.words
        });


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('lesson_form', { title: 'Create Lesson', lesson: lesson, errors: errors.array()});
            return;
        }
        else {
            // Data from form is valid.
            // Check if Genre with same name already exists.
            Lesson.findOne({ 'lesson_id': req.body.lesson_id })
            .exec( function(err, found_lesson) {
                if (err) { return next(err); }

                if (found_lesson) {
                    // Genre exists, redirect to its detail page.
                    res.redirect(found_lesson.url); //////// Do this
                }
                else {

                    lesson.save(function (err) {
                        if (err) { return next(err); }
                        // Genre saved. Redirect to genre detail page.
                        res.redirect('');
                    });

                }

            });
        }
    }
];

// Display lesson update form on GET.
exports.lesson_update_get = function(req, res) {
    // Get book, authors and genres for form.
    Lesson.findById(req.params.id)
        .exec(function(err, lesson) {
            if (err) { return next(err); }
            if (lesson==null) { // No results.
                var err = new Error('Lesson not found');
                err.status = 404;
                return next(err);
            }
            res.render('lesson_form', { title: 'Update Lesson', lesson: lesson });
        });
};

// Handle lesson update on POST.
exports.lesson_update_post = [

    // Convert the words to an array
    (req, res, next) => {
        if(!(req.body.words instanceof Array)){
            if(typeof req.body.words==='undefined')
                req.body.words = [];
            else
                req.body.words = req.body.words.split(/,[\s]*/);
        }
        next();
    },
    // Validate that the name field is not empty.
    check('lesson_id', 'lesson_id required').trim().isLength({ min: 1 }),

    // Sanitize (escape) the name field.
    body('lesson_id').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a lesson object with escaped/trimmed data and old id.
        // Create a genre object with escaped and trimmed data.
        var lesson = new Lesson({
            lesson_id: req.body.lesson_id,
            words: req.body.words,
            _id: req.params.id //This is required, or a new ID will be assigned!
        });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.

            Lesson.findById(req.params.id)
                .exec(function(err, lesson) {
                    if (err) { return next(err); }
                    if (lesson==null) { // No results.
                        var err = new Error('Lesson not found');
                        err.status = 404;
                        return next(err);
                    }
                    res.render('lesson_form', { title: 'Update Lesson', lesson: lesson });
                });
            return;
        }
        else {
            // Data from form is valid. Update the record.
            Lesson.findByIdAndUpdate(req.params.id, lesson, {}, function (err,thelesson) {
                if (err) { return next(err); }
                   // Successful - redirect to book detail page.
                   res.redirect("/lessons");
                });
        }
    }
]
