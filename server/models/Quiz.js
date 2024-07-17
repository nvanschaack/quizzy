// import { Schema, Types } from 'mongoose'
const { Schema, model } = require('mongoose');

//SUBDOCUMENT
const questionSchema = new Schema(
    {
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
}, 
{
    id: false
}
)
//SCHEMA- recipe
const quizSchema = new Schema(
    {
        questions: [questionSchema],
        category: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: true
        },
    },
    {
        //prevents virtual id from being made. now only _id will return (mongo creates multiple id's for some reason)
        id: false
    }
)
//MODEL- following the recipe
const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;