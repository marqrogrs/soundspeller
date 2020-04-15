var Lesson = require('../models/lesson');
var Word = require('../models/word');
var Phoneme = require('../models/phoneme');

// url/api/lessons?id=1.3
exports.index = function(req, res, next) {
    if (req.query.id) {
        Lesson.findOne({ lesson_id: req.query.id }, 'lesson_id words')
            .populate("words")
            .exec(function (err, lesson) {
                if (err) {
                    return next(err);
                }
                if (lesson.length == 0) {
                    res.status(500).json({ error: "No lessons found with id: " + req.query.id })
                } else {
                    //Successful, so render
                    res.json(lesson);
                }

            });
    } else {
        Lesson.find({ }, 'lesson_id words')
            .exec(function (err, list_lessons) {
                if (err) { return next(err); }
                //Successful, so render
                res.json(list_lessons);
            });
    }
};


// url/api/word?id=4902853
// url/api/word?word=foot
exports.word = function (req, res) {
    if (req.query.word) {
        Word.findOne({ word: req.query.word.toUpperCase() }).exec(function (err, word) {
            if (err) { return next(err) }

            res.json(word)
        })
    } else if (req.query.id) {
        Word.findById(req.query.id)
            .populate("phonemes")
            .exec(function (err, word) {
            if (err) { return next(err) }

            res.json(word)
        })
    } else {
        res.json({"ERROR": "No word specified, too many words to fetch."})
    }
}


// url/api/phonemes will give all phonemes
// url/api/phonemes?sound=52j2h5345 will give the soundfile
// url/api/phonemes?id=52j2h5345 will give the phoneme with the id
exports.phoneme = function (req, res, next) {
    if (req.query.sound) {
        Phoneme.findById(req.query.sound).exec(function (err, phoneme) {
            if (err) { return next(err); }

            res.contentType(phoneme.soundfile.contentType)
            res.send(phoneme.soundfile.data);
        })
    } else if (req.query.id) {
        Phoneme.findById(req.query.id).exec(function(err, phoneme) {
            if (err) { return next(err); }

            res.json(phoneme)
        })
    } else {
        Phoneme.find({}, "phoneme").exec(function(err, phonemes) {
            if (err) { return next(err); }

            res.json(phonemes)
        })
    }
}
