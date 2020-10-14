import React, { Component } from "react";
import { Link } from "react-router-dom";

import cart from "./images/cart.png";
import user from "./images/user.png";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";

import authService from "./../../../service/auth.service";
import productsService from "./../../../service/products.service";

import Suggestions from "./Suggestions";

import "./Navbar.css";
export default class extends Component {
  constructor(props) {
    super();
    this.state = {
      cartQuantity: 0,
      search: "",
      showSuggestion: false,
      products: [],
    };
    this.authService = new authService();
    this.productsService = new productsService();
  }

  handleChange = (e) => {
    // const quantity = [...this.state.cartQuantity];
    this.props.cartChanged(e.target.quantity);
  };

  getCartTotal = () => {
    return this.props.cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  handleInputChange = (e) => {
    let { name } = e.target;
    let value = name === "checked" ? e.target.checked : e.target.value;
    this.setState({ [name]: value, showSuggestion: true });
  };

  hiddeSuggestion = () => {
    this.setState({ showSuggestion: false, search: "" });
  };

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg" onClick={() => this.hiddeSuggestion()}>
          <Link to="/">
            <Navbar.Brand>Citricco-logo</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                title="Pendientes"
                id="basic-nav-dropdown"
                className="earrings"
              >
                <NavDropdown.Item>
                  <Link to="/products/category/hoops" className="dropdown-item">
                    Hoops
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    to="/products/category/pendants"
                    className="dropdown-item"
                  >
                    Pendants
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <Link className="dropdown-item" to="/products/all">
                    Ver todo
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                name="search"
                value={this.state.search}
                onChange={this.handleInputChange}
              />
            </Form>

            {this.props.loggedInUser ? (
              <Link className="nav-link" to="/account/profile">
                {/* //------------------------ */}
                <div className="mb-2">
                  {["down"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="secondary"
                      title={
                        <img
                          className="cart-img"
                          src={user}
                          alt={"user-logo"}
                        />
                      }
                    >
                      <Dropdown.Item eventKey="1">
                        <Link className="dropdown-item" to="/account/profile">
                          My profile
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2">
                        {" "}
                        <Link
                          className="dropdown-item"
                          to="account/orderhistory"
                        >
                          Order history
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        <Link className="dropdown-item" to="/wishlist">
                          My whislist
                        </Link>
                      </Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </Link>
            ) : (
              <Link className="nav-link" to="/account/login">
                <img className="cart-img" src={user} alt={"user-logo"} />
              </Link>
            )}

            <Link className="nav-link" to="/cart">
              <img className="cart-img" src={cart} alt={"cart-logo"} />
              {this.getCartTotal()}
            </Link>
          </Navbar.Collapse>
        </Navbar>

        {this.state.showSuggestion && (
          <Suggestions
            hiddeSuggestion={this.hiddeSuggestion}
            search={this.state.search}
            refresh={this.props.refresh}
          />
        )}
      </>
    );
  }
}
