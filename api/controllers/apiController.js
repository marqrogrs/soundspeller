var Lesson = require('../models/lesson');

// url/api/lessons?id=1.3
exports.index = function(req, res) {
    if (req.query.id) {
        Lesson.find({ lesson_id: req.query.id }, 'lesson_id words')
            .exec(function (err, list_lessons) {
                if (err) {
                    return next(err);
                }
                if (list_lessons.length == 0) {
                    res.status(500).json({ error: "No lessons found with id: " + req.query.id })
                } else {
                    //Successful, so render
                    res.json(list_lessons);
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
