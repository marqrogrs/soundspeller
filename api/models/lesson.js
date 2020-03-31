var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LessonSchema = new Schema(
    {
        lesson_id: {type: String, required: true, max: 100},
        words: [{type: String, max: 100}]
    }
);


//Export model
module.exports = mongoose.model('Lesson', LessonSchema);
