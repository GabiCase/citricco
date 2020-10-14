import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import './Payment.css'

const Payment = () =>





    <Container className="payment-box">

        <Row >
            <Col></Col>
            <Col>
                <div className="paymentCont">
                    <div className="headingWrap">
                        <h3 className="headingTop text-center">Select Your Payment Method</h3>

                    </div>
                    <div className="paymentWrap">
                        <div className="paymentBtnGroup btn-group-justified" data-toggle="buttons">

                            <div className="method visa btn paymentMethod active"></div>

                            <div className="method amex btn paymentMethod"></div>

                            <div className="method master-card btn paymentMethod"></div>

                        </div>
                    </div>
                    <div className="footerNavWrap clearfix">
                        <div className="btn btn-success pull-left btn-fyi"> CONTINUE SHOPPING</div>
                        <div className="btn btn-success pull-right btn-fyi">CHECKOUT</div>
                    </div>
                </div>
            </Col>
            <Col></Col>

        </Row>
    </Container >








export default Payment




