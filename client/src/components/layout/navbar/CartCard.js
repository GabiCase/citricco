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


            {/* <Container className="bottom-20">
                <Row>
                    <Col sm={10} md={6}>
                        <img className="payment-image" src={imageUrl[0]} alt={name} />
                    </Col>

                    <Col sm={10} md={6}>
                        <h4>{name}</h4>
                        <Link className="remove-button" onClick={removeFromCart}><img className="trash" src={trash} alt="trash logo" /></Link>
                        <p>{price}€</p>
                        <Counter quantity={quantity} decrease={decrease} increase={increase} />

                    </Col>
                </Row>
            </Container> */}

        </>

    )
}

export default CartCard
{/* <Row className="product-box">
    <Col xs={12} sm={6} md={6} lg={5}>
        <img className="payment-image" src={imageUrl[0]} alt={name} />
    </Col>
    <Col xs={12}>
        <Row className="d-flex justify-content-center">
            <Col xs={6} sm={4} md={4} lg={5} className="info">
                <h4>{name}</h4>
            </Col>

            <Col xs={6} sm={2} md={2} lg={2} className="remove">
                <Link className="remove-button" onClick={removeFromCart}><img className="trash" src={trash} alt="trash logo" /></Link>
            </Col>
        </Row>
    </Col>
    <Col xs={12}>
        <p>{price}€</p>
    </Col>
    <Col xs={12}>
        <div>
            <Counter quantity={quantity} decrease={decrease} increase={increase} />
        </div>


    </Col>
</Row> */}