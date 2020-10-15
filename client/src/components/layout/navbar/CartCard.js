import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './Navbar.css'

import Counter from './../../shared/counter/Counter'
import trash from './../../pages/profile/basura.png'

const CartCard = ({ imageUrl, name, quantity, price, removeFromCart, decrease, increase }) => {

    return (
        <>


            <Container className="details">
                <main>
                    <Row>


                        <Col xs={7} sm={5} md={6} lg={6} className="img-details">
                            <img className="payment-image" src={imageUrl[0]} alt={name} />
                        </Col>


                        <Col xs={7} sm={5} md={6} lg={6}>
                            <Row>
                                <Col lg={12}>
                                    <Row>
                                        <Col xs={8} ><h4>{name}</h4></Col>
                                        <Col xs={4}> <Link className="remove-button" onClick={removeFromCart}><img className="trash" src={trash} alt="trash logo" /></Link>  </Col>
                                    </Row>


                                </Col>
                                <Col lg={12}>
                                    <div>{price}€</div>
                                </Col>
                                <Col lg={12}>
                                    <Counter quantity={quantity} decrease={decrease} increase={increase} />
                                </Col>
                            </Row>






                        </Col>

                    </Row>
                </main>




            </Container>
      )
}


          

export default CartCard
