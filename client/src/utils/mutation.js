import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
      }
        token
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        username
        email
      }
      token
    }
  }
`;

export const SAVE_SCORE = gql`
mutation saveScore($score: Int, $quizCategory: String, $quizTitle: String) {
  saveScore(score: $score, quizCategory: $quizCategory, quizTitle: $quizTitle) {
    _id
    username
    email
    quizScore {
      quizCategory
      score
      quizTitle
    }
  }
}
`
// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;
//displays auth token (expires after 2 hours)


// export const ADD_THOUGHT = gql`
// mutation AddThought($thoughtText: String!) {
//   addThought(thoughtText: $thoughtText) {
//     _id
//     thoughtAuthor
//     thoughtText
//   }
// }
// `;

// export const UPDATE_HIGH_SCORE = gql`
// mutation addHighScore($highScore: Float) {
//   addHighScore(highScore: $highScore) {
//     _id
//     username
//     highScore
//   }
// }
// `