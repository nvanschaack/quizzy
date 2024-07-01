import React from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { UPDATE_HIGH_SCORE } from '../utils/mutation';
import { useParams } from 'react-router-dom';
import ThoughtForm from '../components/ThoughtForm';
import { QUERY_ME } from '../utils/queries';

export default function Scores() {
    let { score } = useParams()
    score = parseInt(score)
    const [addHighScore, { error }] = useMutation(UPDATE_HIGH_SCORE)
    const [highScore, setHighScore] = useState(0)
    const { data } = useQuery(QUERY_ME);

    useEffect(() => {
        const updateHighScore = async () => {
            try {
                    console.log(data)
                    if (score >= data.me.highScore) {
                       const res = await addHighScore({ variables: { highScore: score } })
                        setHighScore(res.data.addHighScore.highScore)
                    }
            } catch (err) {
                console.error(err);
            }
        };
        if (data){
            setHighScore(data.me.highScore);
            updateHighScore();
        };
    }, [score, data]);

    return (
        <div>
            <h1>
                Your Current Score is: {(score/4)*100}%
                <br />
                Your High Score: {(highScore/4)*100}%
                <br />
                <ThoughtForm />
            </h1>
        </div>
    )
}
