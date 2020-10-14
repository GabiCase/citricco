import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import "./profile.css";

import authService from "./../../../service/auth.service";
import AddressForm from "./AddressForm";

export default class extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.authService = new authService();
  }

  logoutUser = () => {
    this.authService

      .logout()
      .then(() => this.props.setTheUser(null), this.props.history.push("/"))
      .catch((err) => console.log("ERROR", err));
  };

  render() {
    return (
      <>
        <Container>
          <h3 class="centered-text"> Profile</h3>
          <Row className="form-signup">
            <Col xs={12} md={12} lg={6} className="right-box">
              <h4>Hi, {this.props.loggedInUser.username}!</h4>
              <p>
                Not {this.props.loggedInUser.username}?
                <Link onClick={() => this.logoutUser()}> Logout </Link>
              </p>
              <Link to="/wishlist">
                <h6>Check your favorites</h6>
              </Link>
            </Col>

            <Col xs={12} md={12} lg={6} className="left-box">
              <AddressForm loggedInUser={this.props.loggedInUser} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
