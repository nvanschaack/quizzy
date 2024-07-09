import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useQuery } from '@apollo/client'
import { QUIZ_BY_CATEGORY } from '../utils/queries'

export default function CategorySubmitResults() {
  //this is extracting the parameter 'category' used in main.jsx so that its available in code to follow
  let { category } = useParams();

  //extracting data, loading and error variables from QUIZ_BY_CATEGORY query
  const { data, loading, error } = useQuery(QUIZ_BY_CATEGORY, {
    //in queries.js, this particular query uses a variable (category) which info is needed in order to see quizzes by their category. we got access to category using the params statement above.
    variables: { category: category }
  })

  console.log(data);

  return (
    <>
    {/* if the page is loading, show an h1 tag stating 'loading', ELSE... */}
      {loading ? (<h1>loading...</h1>) : (
        <>
          <h1>Results</h1>
          {/* map over every quiz by accessing them at data.quizByCategory */}
          {data?.quizByCategory.map((quiz) => (
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{quiz.title}</Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text> */}
                <Button onClick={() => document.location.assign(`/${quiz._id}`)} variant="primary">Take Quiz</Button>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </>
  )
}
