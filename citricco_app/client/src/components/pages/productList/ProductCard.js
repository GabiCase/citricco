import React from 'react'
import { Link } from 'react-router-dom'

import './ProductCard.css'


import { Card, Button, Col } from 'react-bootstrap'

export default ({ _id, name, image, price }) => {

    return (
        <Col sm={12} md={4} lg={3}>
            <Card className="card" >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{price}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}