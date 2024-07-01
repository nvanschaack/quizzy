const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 240,
    trim: true,
  },
  thoughtAuthor: {
    type: String, 
    required: true,
    trim: true,
  },
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
