const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tech-quiz-2');

module.exports = mongoose.connection;