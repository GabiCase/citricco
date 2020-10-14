import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'

import './Navbar.css'

import Counter from './../../shared/counter/Counter'
import trash from './../../pages/profile/basura.png'

const CartCard = ({ imageUrl, name, quantity, price, removeFromCart, decrease, increase }) => {

    return (
        <>
            <Container className="bottom-20">
                <Row className="product-box">
                    <Col xs={10} md={5}>
                        <img className="payment-image" src={imageUrl[0]} alt={name} />
                    </Col>
                    <Col xs={10} md={5} className="info">
                        <h4>{name}</h4>
                        <p>{price}€</p>
                        <Counter quantity={quantity} decrease={decrease} increase={increase} />
                    </Col>
                    <Col xs={10} md={2} className="remove">
                        <Button className="remove-button" onClick={removeFromCart}><img className="trash" src={trash} alt="trash logo" /></Button>
                    </Col>
                </Row>
            </Container>

        </>

    )
}

export default CartCard