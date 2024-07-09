import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'

import { useQuery } from '@apollo/client'
import { SINGLE_QUIZ } from '../utils/queries'

export default function QuizPage() {

    let { id } = useParams()
    console.log(id);

    const { data, loading, error } = useQuery(SINGLE_QUIZ, {
        //why would the variable be id and not _id???
        variables: { id: id }
    })
    console.log('data:', data)

    const [userChoice, setUserChoice] = useState({
        group0:'',
        group1: '', 
        group2: '', 
        group3:'',
        group4: ''
    })



    return (
        <>
            {loading ? (<h1>loading...</h1>) : (
                <>
                    <h1> {data.singleQuiz.title} Quiz Page</h1>
                    <ol>
                        {data.singleQuiz.questions.map((question, i) => (
                            <Form>

                                <li key={i}>{question.question}</li>

                                {question.options.map((option, y) => (
                                    <Form.Check
                                    key={y}
                                    type='radio'
                                    label={option}
                                    value={userChoice[`group${i}`]}
                                    name={`group${i}`}
                                    onChange={(e)=> {
                                        // userChoice.push(option)
                                        
                                        console.log(option);
                                    }}
                                    />
                                ))}
                            </Form>
                        ))}
                    </ol>
                </>
            )}
        </>
    )
}
