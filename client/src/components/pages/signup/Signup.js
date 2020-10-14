import React, { Component } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import './Signup.css'

import authService from "../../../service/auth.service";

class Signup extends Component {
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
            .signup(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push("/")
            })
            .catch(err => console.log('ERROR', err))
    }

    render() {
        return (
            <>
                <Container>

                    <Row className="form-register">

                        <Col sm={12} md={7} lg={7} className="register-box">
                            <h3>Register</h3>
                            <Form onSubmit={this.handleFormSubmit}>
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
                                <Button type="submit">Register</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>


            </>
        );
    }
}

export default Signup;
