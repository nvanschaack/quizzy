const { User, Quiz, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
 
    singleQuiz: async (_, args, context) => {
      if (context.user) {
        //args is the parameters passed in the singleQuiz query in the typeDefs
        return Quiz.findOne({ _id: args.quizId })
      }
    },
    quizByCategory: async (_, args, context) => {
      if (context.user) {
        return Quiz.find({category: args.category})
      }
    },
    allQuizzes: async () => {
      return Quiz.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },

  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    saveScore: async (_, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$push:{quizScore: args}},
          {new: true, runValidators: true}
        )
        return updatedUser;
      }
      throw AuthenticationError;
    }
    
  },
};

module.exports = resolvers;
