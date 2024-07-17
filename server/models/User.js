// import { Schema, model } from 'mongoose'
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { dateFormat } = require('../utils/dateFormat')

const scoreSchema = new Schema({
  score: {
    type: Number,
    default: 0
  },
  quizCategory: {
    type: String
  },
  quizTitle: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (timeStamp) => dateFormat(timeStamp)
  }
})

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  quizScore: [scoreSchema],
});

//hashing password using bcrypt. the encryption will be 2^10 
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//compare password to password that is stored
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;