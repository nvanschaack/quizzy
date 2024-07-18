import React from 'react'
import Card from 'react-bootstrap/Card';

import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'

export default function UserScores() {

    const { data, loading, error } = useQuery(QUERY_ME)
    console.log(data);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div>
            
                <h2>{data.me?.username}, here are your past quiz scores</h2>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {data.me?.quizScore.map((score, i) => (
                    <Card key={i} style={{ width: '18rem', margin: '5px' }}>
                        <Card.Body>
                            <Card.Title>Quiz: {score.quizTitle}</Card.Title>
                            <Card.Text>Score: {score.score}%</Card.Text>
                            <Card.Text>Taken: {score.createdAt}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    )
}
