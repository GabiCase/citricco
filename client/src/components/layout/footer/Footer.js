import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import email from './email.png'
import instagram from './instagram.png'
import phone from './phone.png'

import "./Footer.css";

export default () => {

  return (
    <div className="footer">

      <Row className="justify-content-center">
        <Col xs={12} sm={4} md={4} lg={4} xl={4} className="footer-col">
          <img src={instagram} alt="instagram-logo" />
          <h6>instagram</h6>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4} xl={4} className="footer-col">
          <img src={email} alt="email logo" />
          <h6>send a mail</h6>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4} xl={4} className="footer-col">
          <img src={phone} />
          <h6>call us</h6>
        </Col>
      </Row>

    </div>
  );
};

