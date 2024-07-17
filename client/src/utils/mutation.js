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
      createdAt
    }
  }
}
`