const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    highScore: Float
    thoughts: [Thought]
  }

  type Quiz {
    question: String!
    options: [String]!
    correctAnswer: String!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    quizzes: [Quiz]
    me: User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addThought(thoughtText: String!): Thought
    removeThought(thoughtId: ID!): Thought

    addHighScore(highScore: Float): User
    
    # addQuiz in future....
  }
`;

module.exports = typeDefs;
