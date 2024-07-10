import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_QUIZ } from '../utils/queries';

export default function QuizPage() {

    let { id } = useParams();

    const { data, loading, error } = useQuery(SINGLE_QUIZ, {
        variables: { quizId: id }
    });

    //Added userChoices state to keep track of user selections.
    const [userChoices, setUserChoices] = useState({});

    //taking in index of question and option parameters to be used when setting new userchoices object.
    //questionIndex represents the index of the question asked
    //option represents the answer the user chose
    const handleOptionChange = (questionIndex, option) => {
        //setUserChoices is making an updated userChoices object by spreading the original userChoices (all the options available per each question) and making a NEW object with key of the question index asked and value of the option the user selected
        setUserChoices({
            ...userChoices,
            [questionIndex]: option
        });
    };

    //console logging the current value stored in user choices
    const handleSubmit = () => {
        console.log(userChoices);


        // create a varible that will represent the array from the query
        const questionArray = data.singleQuiz.questions
        let userScore = 0
        // we need to loop the questions array that comes from apollo
        questionArray.forEach((question, i) => {
            // in the loop we need to compare the correct answer property from each index to the property of the userchoices variable from state.
            // if the values match give the user one point
            if (question.correctAnswer === userChoices[i]) {
                userScore++
            }         
        })

        // create a percentage of correct using the score and the length of the question array and multiply by 100
        const percentScore = (userScore / questionArray.length) * 100;

        console.log(percentScore);
    };

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error loading quiz</h1>;

    return (
        <>
            <h1>{data.singleQuiz.title} Quiz Page</h1>
            <Form>
                <ol>

                    {data.singleQuiz.questions.map((question, i) => (

                        <li key={i}>

                            {question.question}

                            {question.options.map((option, y) => (

                                <Form.Check
                                    key={y}
                                    type="radio"
                                    label={option}
                                    name={`group${i}`}
                                    onChange={() => handleOptionChange(i, option)}
                                    checked={userChoices[i] === option}
                                />
                            ))}
                        </li>
                    ))}
                </ol>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    );
}