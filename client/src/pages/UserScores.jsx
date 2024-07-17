import React from 'react'
import Card from 'react-bootstrap/Card';

import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'

export default function UserScores() {

    const { data, loading, error } = useQuery(QUERY_ME)

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div>
            <>
                <h2>{data.me.username}, here are your past quiz scores</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>

        </div>
    )
}
