var Lesson = require('../models/lesson');
var Word = require('../models/word');
var Phoneme = require('../models/phoneme');

// url/api/lessons?id=1.3
exports.index = function(req, res, next) {
    if (req.body.id) {
        Lesson.findOne({ lesson_id: req.body.id }, 'lesson_id words')
            .populate("words")
            .exec(function (err, lesson) {
                if (err) {
                    return next(err);
                }
                if (lesson.length == 0) {
                    res.status(500).json({ error: "No lessons found with id: " + req.body.id })
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


// url/api/word?ids=4902853,47230ht09
// url/api/word?words=foot,aardvark
exports.word = function (req, res, next) {
    if (req.body.words) {
        Word.find({ word: { $in: req.body.words } }).exec(function (err, word) {
            if (err) { return next(err) }

            res.json(word)
        });
    } else if (req.body.ids) {
        Word.find({ _id: { $in: req.body.ids }})
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
    if (req.body.sound) {
        Phoneme.findById(req.body.sound).exec(function (err, phoneme) {
            if (err) { return next(err); }

            res.contentType(phoneme.soundfile.contentType)
            res.send(phoneme.soundfile.data);
        })
    } else if (req.body.id) {
        Phoneme.findById(req.body.id).exec(function(err, phoneme) {
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
