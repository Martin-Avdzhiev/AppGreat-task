const { Schema, model, ObjectId } = require('mongoose');
const noteSchema = new Schema({
    title: String,
    content: String,
    author: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
const Note = model('Note', noteSchema);
module.exports = Note;