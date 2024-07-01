import React from 'react';
import { QUERY_ALL_QUIZZES } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function QuizForm() {
    const [quizForm, setQuizForm] = useState()
    const [score, setScore] = useState(0);
    const redirect = useNavigate()
    
    const { loading, data } = useQuery(QUERY_ALL_QUIZZES)
    // console.log(data);
    useEffect(() => {
        //imeediately on page load, console.log returns undefined
        //console.log(data);
    }, [loading])
    const handleOptionChange = (answer, index) => {
        console.log(answer === data.quizzes[index].correctAnswer);
        if (answer === data.quizzes[index].correctAnswer) {
            setScore(score + 1);
        }

    };

    const displayScore = (event) => {
        event.preventDefault()
        //run mutation to display score in db
        return redirect(`/scorepage/${score}`);
    };

    return (
        <div>
            
            <div>
                <form onSubmit={displayScore}>
                    {loading ? <h1>loading</h1> : data.quizzes.map((option, questionindex) => {
                        return (
                            <div key={questionindex}>
                                <label>{option.question}</label>

                                {option.options.map((answer, answerIndex) => (
                                    <fieldset key={answerIndex}>
                                        <label>
                                            <input
                                                type="radio"
                                                value={answer}
                                                name={option.question}
                                                onChange={() => handleOptionChange(answer, questionindex)}
                                            />{answer}

                                        </label>
                                    </fieldset>
                                ))}
                            </div>
                        )
                    })}
                    <br />
                    <button type='submit'>SUBMIT QUIZ</button>

                </form>
            </div>
        </div>
    )
}
