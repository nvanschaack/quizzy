const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.SECRET;
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // We split the token string into an array and return actual token
    //this trims off the word bearer
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      //verify decodes 
      // data is a property in payload and payload is a property in the token
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      //data is set as req.user
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // return the request object so it can be passed to the resolver as `context`
    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    //sign encodes a string
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
