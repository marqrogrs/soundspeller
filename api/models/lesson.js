var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LessonSchema = new Schema(
    {
        lesson_id: {type: String, required: true, max: 10},
        words: [{type: Schema.Types.ObjectId, ref: 'Word'}]
    }
);


//Export model
module.exports = mongoose.model('Lesson', LessonSchema);
