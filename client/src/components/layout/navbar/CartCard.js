import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './Navbar.css'

import Counter from './../../shared/counter/Counter'
import trash from './../../pages/profile/basura.png'

const CartCard = ({ imageUrl, name, quantity, price, removeFromCart, decrease, increase }) => {

    return (
        <>
            <Container className="bottom-20">
                <Row className="product-box">
                    <Col xs={12} sm={6} md={6} lg={5}>
                        <img className="payment-image" src={imageUrl[0]} alt={name} />
                    </Col>
                    <Col xs={6} sm={4} md={4} lg={5} className="info">
                        <h4>{name}</h4>
                        <p>{price}€</p>
                        <div>
                            <Counter quantity={quantity} decrease={decrease} increase={increase} />
                        </div>


                    </Col>
                    <Col xs={6} sm={2} md={2} lg={2} className="remove">
                        <Link className="remove-button" onClick={removeFromCart}><img className="trash" src={trash} alt="trash logo" /></Link>
                    </Col>
                </Row>
            </Container>

        </>

    )
}

export default CartCard