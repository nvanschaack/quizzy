const db = require('../config/connection');
const { User, Quiz } = require('../models');
const UserSeed = require('./UserSeed.json');
const QuizSeed = require('./QuizSeed.json');
// const ThoughtSeed = require('./ThoughtSeed.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Quiz', 'quizzes');

    //uncomment this when need to re-seed locally
    // await cleanDB('User', 'users');
    // await User.create(UserSeed);

    await Quiz.create(QuizSeed);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});