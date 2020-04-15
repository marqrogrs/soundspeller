var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PhonemeSchema = new Schema(
    {
        phoneme: {type: String, required: true, max: 10},
        soundfile: {data: Buffer, contentType: String}
    }
);

PhonemeSchema.virtual("url").get(function() {
    return `/phonemes/${this._id}`
})

//Export model
module.exports = mongoose.model('Phoneme', PhonemeSchema);
