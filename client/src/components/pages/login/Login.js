import React, { Component } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import './Login.css'
import { Link } from 'react-router-dom'
;


import authService from "../../../service/auth.service";

class Login extends Component {

    constructor(props) {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.authService = new authService();

    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.authService
            .login(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push("/")
            })
            .catch(err => console.log('ERROR', err))
    }

    render() {
        return (
            <>
                <Container className="form-signup">
                    <Row>
                        <Col xs={12} md={5} clasName="app right">


                            <h2>Welcome back!</h2>
                            <p> Log in to your account:</p>

                            <Form className="form" onSubmit={this.handleFormSubmit}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        value={this.state.username}
                                        name="username"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="Give your product a name"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>password</Form.Label>
                                    <Form.Control
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleInputChange}
                                        type="password"
                                        placeholder="Give your product a price"
                                    />
                                </Form.Group>
                                <Button className="login-submit" type="submit">Login</Button>
                            </Form>



                        </Col>
                        <Col xs={12} md={5} className="left">

                            <h5 className="text-signup">Don´t you have an account yet?</h5>
                            <Button className="signup-left">
                                <Link to="/account/signup">Signup here!</Link>
                            </Button>

                        </Col>
                    </Row>


                </Container>


      </>
    );
  }
}

export default Login;
