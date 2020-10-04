import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav, Form, FormControl, NavDropdown, Button } from 'react-bootstrap'

export default () => {

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
                        <Link className="nav-link" to="/">Mi cuenta</Link>
                        <Link className="nav-link" to="/">Carrito</Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}