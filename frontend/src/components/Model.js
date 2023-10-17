import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Model = ({ model }) => {
    return(
        <Card className='my-3 p-3 rounded'>
            <Link to={`/model/${model.id}`}>
                <Card.Img src={model.image} variant='top'/>
            </Link>

            <Card.Body>
                <Link to={`/model/${model.id}`}>
                    <Card.Title as='div'>
                        <strong>{model.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='h3'>{model.price}</Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Model