import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { SINGLE_QUIZ } from '../utils/queries';
import { SAVE_SCORE } from '../utils/mutation';
import auth from '../utils/auth';

export default function QuizPage() {

    const [modalShow, setModalShow] = useState(false);
    const [scoreSubmitted, setScoreSubmitted] = useState(false);
    const [percentScore, setPercentScore] = useState(0);

    let { id } = useParams();

    const { data, loading, error } = useQuery(SINGLE_QUIZ, {
        variables: { quizId: id }
    });

    const [saveScore] = useMutation(SAVE_SCORE)

    //Added userChoices state to keep track of user selections.
    const [userChoices, setUserChoices] = useState({});

    const [results, setResults] = useState({})

    //taking in index of question and option parameters to be used when setting new userchoices object.
    //questionIndex represents the index of the question asked (ex. 0,1,2,3,4)
    //option represents the answer the user chose
    const handleOptionChange = (questionIndex, option) => {
        //setUserChoices is making an updated userChoices object by spreading the original userChoices (all the options available per each question) and making a NEW object with a key of index of question asked and value of the option the user selected
        setUserChoices({
            ...userChoices,
            [questionIndex]: option
        });
    };

    //console logging the current value stored in user choices
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(userChoices);

        // create a varible that will represent the array of questions from the query
        const questionArray = data.singleQuiz.questions
        let userScore = 0

        let newResults = {}

        // we need to loop the questions array that comes from apollo
        questionArray.forEach((question, i) => {
            // in the loop we need to compare the correct answer property from each index to the property of the userchoices variable from state.
            newResults[i] = {
                userAnswer: userChoices[i],
                isCorrect: question.correctAnswer === userChoices[i]
            }


            // if the values match give the user one point
            if (question.correctAnswer === userChoices[i]) {
                userScore++
            }
        })

        // create a percentage of correct using the score and the length of the question array and multiply by 100
        const quizPercentScore = (userScore / questionArray.length) * 100;
        setPercentScore(quizPercentScore)

        //send score, quizCategory, quizTitle to DB using SAVE_SCORE mutation
        await saveScore({
            variables: {
                score: quizPercentScore,
                quizCategory: data.singleQuiz.category,
                quizTitle: data.singleQuiz.title
            }
        })

        // once user hits submit, modal will pop up with the users username, score, and retry button
        setModalShow(true)
        setScoreSubmitted(true)
        setResults(newResults)
    };

    console.log(results);

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
                                <div style={{ display: 'flex' }}>
                                    <Form.Check
                                        key={y}
                                        type="radio"
                                        label={option}
                                        name={`group${i}`}
                                        onChange={() => handleOptionChange(i, option)}
                                        checked={userChoices[i] === option}
                                    />
                                    {results[i] && (userChoices[i] === option) ? (
                                        <div style={{
                                            marginLeft: 10, color: results[i].isCorrect
                                                ? 'green' : 'red'
                                        }}>
                                            {results[i].isCorrect ? '✓' : 'X'}
                                        </div>
                                    ) : ''}
                                </div>
                            ))}
                        </li>
                    ))}
                </ol>

                {scoreSubmitted ? (<Button variant="primary" onClick={() => document.location.reload()}>
                    Retake Quiz
                </Button>) : (
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>)}

            </Form>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                score={percentScore}
                title={data.singleQuiz.title}
                username={auth.getProfile().data.username}
            />
        </>
    );
}

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Quiz Submitted!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Nice work, {props.username}</h4>
                <p>
                    You got {props.score}% on {props.title} quiz.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>

                <Button onClick={() => document.location.reload()}>Retake</Button>
            </Modal.Footer>
        </Modal>
    );
}
