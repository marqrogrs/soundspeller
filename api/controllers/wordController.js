var Word = require('../models/word');

exports.word_detail = function(req, res, next) {
    Word.findById(req.params.id)
        .populate("phonemes")
        .exec(function(err, word) {
            res.render('word_detail', { title: word.word, word: word });
    })
}
