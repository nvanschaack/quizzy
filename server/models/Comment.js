const { Schema, model } = require('mongoose');


const commentSchema = new Schema({
  commentText: {
    type: String,
    required: 'You need to leave a comment!',
    minlength: 1,
    maxlength: 240,
    trim: true,
  },
  commentAuthor: {
    type: String, 
    required: true,
    trim: true,
  },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
