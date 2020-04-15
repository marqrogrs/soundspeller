var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WordSchema = new Schema({
    word: {type: String, required: true},
    phonemes: [{type: Schema.Types.ObjectId, ref: 'Phoneme'}],
    graphemes: [String],
    syllables: [String],
    description: {type: String},
    meta: [{
        type: String,
        enum: ["SPECIALLY_PRONOUNCEABLE", "NON_PRONOUNCEABLE", "HOMONYM", "SYNONYM"]
    }]
});

WordSchema.virtual("url").get(function() {
    return `/words/${this._id}`
})


//Export model
module.exports = mongoose.model('Word', WordSchema);
