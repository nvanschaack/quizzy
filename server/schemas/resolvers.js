const { User, Quiz, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find().populate('thoughts');
    // },
    // user: async (parent, { _id }) => {
    //   return User.findOne({ _id }).populate('thoughts');
    // },
    singleQuiz: async (_, args, context) => {
      if (context.user) {
        //args is the parameters passed in the singleQuiz query in the typeDefs
        return Quiz.findOne({ _id: args._id })
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
    // thoughts: async () => {
    //   return Thought.find().sort({"_id": -1});
    // },
    // thought: async (_, { _id }) => {
    //   return Thought.findOne({ _id });
    // }
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
    // addThought: async (parent, { thoughtAuthor, thoughtText }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.create({
    //       thoughtText,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { thoughts: thought._id } }
    //     );
    //     return thought;
    //   }
    // },
    // removeThought: async (parent, { thoughtId }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.findOneAndDelete({
    //       _id: thoughtId,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    // },
    // addHighScore: async (_, { highScore }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id)
    //     //if database highscore is less than the highscore coming from the client side
    //     if (user.highScore < highScore) {
    //       user.highScore = highScore
    //       await user.save();
    //     }
    //     return user;
    //   }
    //   throw AuthenticationError
    // }
  },
};

module.exports = resolvers;