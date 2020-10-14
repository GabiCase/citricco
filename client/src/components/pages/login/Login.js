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
                <Container >
                    <Row className="form-signup">
                        <Col className="right-box" xs={12} md={12} lg={6} >
                            <h3>Welcome back!</h3>
                            <Form className="form" onSubmit={this.handleFormSubmit}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        value={this.state.username}
                                        name="username"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="write here your username"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>password</Form.Label>
                                    <Form.Control
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleInputChange}
                                        type="password"
                                        placeholder="write here your password"
                                    />
                                </Form.Group>
                                <Button className="login-submit" type="submit">Login</Button>
                            </Form>
                        </Col>

                        <Col xs={12} md={12} lg={6} className="left-box">
                            <h5 className="text-signup">Don´t you have an account yet?</h5>
                            <p>Welcome! It's quick and easy to set up an account.</p>
                            <Button className="signup-left">
                                <Link className="link" to="/account/signup">Signup here!</Link>
                            </Button>

                        </Col>
                    </Row>


                </Container>


            </>
        );
    }
}

export default Login;
