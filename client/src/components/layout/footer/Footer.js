import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export default () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <img src="https://cdn.iconscout.com/icon/free/png-512/insta-2036559-1740213.png" />
            <h6>instagram</h6>
          </Col>
          <Col>
            <img src="https://cdn.iconscout.com/icon/free/png-512/insta-2036559-1740213.png" />
            <h6>send a mail</h6>
          </Col>
          <Col>
            <img src="https://cdn.iconscout.com/icon/free/png-512/insta-2036559-1740213.png" />
            <h6>call us</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
