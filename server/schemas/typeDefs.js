const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    quizScore: [QuizScore]
  }

  type QuizScore {
  score: Int
  quizCategory: String
  quizTitle: String
  createdAt: String
  }

  type Quiz {
  _id: ID!
  questions: [Question]
  category: String
  title: String!
  }

  type Question {
    question: String!
    options: [String]!
    correctAnswer: String!
  }

  #type Comment {
    #_id: ID
    #commentText: String
    #commentAuthor: String
  #}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    singleQuiz(quizId: ID!): Quiz
    quizByCategory(category: String!): [Quiz]
    allQuizzes: [Quiz]
    me: User
    # users: [User]
    # user(_id: ID!): User
    # thoughts(username: String): [Thought]
    # thought(thoughtId: ID!): Thought
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    saveScore(score: Int, quizCategory: String, quizTitle: String): User

    # addThought(thoughtText: String!): Thought
    #removeThought(thoughtId: ID!): Thought

    # addHighScore(highScore: Float): User
    
    # addQuiz in future....
  }
`;

module.exports = typeDefs;
