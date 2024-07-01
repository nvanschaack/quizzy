// import { Schema, Types } from 'mongoose'
const { Schema, model } = require('mongoose');

const quizSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true,
    },

    // quizCategory: {
    //     type: String,
    //     required: false,
    // }
})

const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;