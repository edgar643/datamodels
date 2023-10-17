import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

import Model from '../components/Model'

const HomeScreen = () => {

    const [models, setModels] = useState([])

    useEffect( () => {
        const fetchModels = async () => {
            const { data } = await axios.get('/api/models/')            
            setModels(data)
        }        
        fetchModels()
    }, [])

    return (
        <>
            <h1> Catálogo de Modelos </h1>  
            <Row>
                {models.map((model) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Model model={model} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
