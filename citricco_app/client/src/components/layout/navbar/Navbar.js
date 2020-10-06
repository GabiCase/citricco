import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

import cart from './images/cart.png'
import { Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap'

import authService from './../../../service/auth.service'

export default class extends Component {

    constructor(props) {
        super()
        this.state = {
            cartQuantity: 0
            // user: '',
            // showModal: false
        }
        this.authService = new authService()
    }
    handleChange = e => {
        const quantity = [...this.state.cartQuantity]
        this.props.cartChanged(e.target.quantity)
    }

    logoutUser = () => {
        this.authService
            .logout()
            .then(() => this.props.setTheUser(null))
            .catch(err => console.log('ERROR', err))
    }
    // componentDidMount = () => {
    //     this.loadProducts();
    // };
    // loadProducts = () => {
    //     this.authService
    //         .
    //         .then((response) => this.setState({ products: response.data }))
    //         .catch((err) => console.log("ERROR", err));
    // };

    // handleModal = (showModal) => this.setState({ showModal });

    render() {
        return (

            <>
                <Navbar bg="light" expand="lg">
                    <Link to="/">
                        <Navbar.Brand>Citricco-logo</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Pendientes" id="basic-nav-dropdown">
                                <Link className="dropdown-item" to="/">Aros</Link>
                                <Link className="dropdown-item" to="/">Colgantes</Link>
                                <NavDropdown.Divider />
                                <Link className="dropdown-item" to="/products/all">Ver todo</Link>
                            </NavDropdown>

                            {/* {!this.props.loggedInUser && <Link className="nav-link" to="/account/login">Login</Link>}
                            {!this.props.loggedInUser && <Link className="nav-link" to="/account/signup">signup</Link>} */}
                            {/* <div className="nav-link">| Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</div> */}

                            <Link className="nav-link" to="/account/login">{this.props.loggedInUser ? this.props.loggedInUser && <Link className="nav-link" to="/account/profile">Welcome, {this.props.loggedInUser.username}</Link> : 'Profile'} </Link>
                            {this.props.loggedInUser && <div className="nav-link" to="/account/logout" onClick={() => this.logoutUser()}>Logout</div>}



                            <Link className="nav-link" to="/"><img className="cart-img" src={cart} />1</Link>

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </>

        )
    }


}