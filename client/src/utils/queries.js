import { gql } from '@apollo/client';

export const QUERY_ALL_QUIZZES = gql`
query allQuizzes {
  allQuizzes {
    _id
    questions {
      question
      correctAnswer
      options
    }
    category
    title
  }
}
`;

// TO DISPLAY HIGH SCORE
export const QUERY_ME = gql`
query me {
  me {
    _id
    quizScore {
      score
      quizCategory
      quizTitle
    }
    email
    username
  }
}
`;

export const SINGLE_QUIZ =gql`
query singleQuiz($quizId: ID!) {
  singleQuiz(quizId: $quizId) {
    _id
    category
    questions {
      question
      options
      correctAnswer
    }
    title
  }
}
`;

export const QUIZ_BY_CATEGORY =gql`
query quizByCategory($category: String!) {
  quizByCategory(category: $category) {
    _id
    questions {
      question
      options
      correctAnswer
    }
    category
    title
  }
}
`;

// export const QUERY_ALL_USERS = gql`
//  query getAllUsers {
//   users {
//     _id
//     highScore
//     email
//     password
//     username
//     thoughts {
//       thoughtText
//     }
//   }
// }
// `;

// export const QUERY_USER = gql`
// query getOneUser($id: ID!) {
//   user(_id: $id) {
//     _id
//     email
//     highScore
//     password
//     username
//     thoughts {
//       _id
//       thoughtAuthor
//       thoughtText
//     }
//   }
// }
// `;


// export const QUERY_THOUGHTS = gql`
// query getAllThoughts {
//   thoughts {
//     _id
//     thoughtAuthor
//     thoughtText
//   }
// }
// `;