import React, { Component } from "react";

import CartCard from "./CartCard";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super();
    this.state = {
      cart: props.cart,
      total: props.total,
    };
  }

  componentDidMount = () => this.props.calculateTotal(this.state.cart);

  render() {
    return (
      <Container className="cart-total">
        <h3 className="text-center">Cart</h3>

        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              {this.props.cart.length >= 1 ? (
                this.props.cart.map((elm) => (
                  <CartCard
                    key={elm._id}
                    {...elm}
                    removeFromCart={() => this.props.removeFromCart(elm)}
                    decrease={() => this.props.decrease(elm)}
                    increase={() => this.props.increase(elm)}
                  />
                ))
              ) : (
                  <>
                    <h4>It appears that your cart is currently empty!</h4>
                    <p>Start shopping</p>
                    <Link to="/products/all">here</Link>
                  </>
                )}
              <p>Total: {this.props.total}€</p>

              <Link className="link-cart" to="/cart">Checkout</Link>
            </div>

          </Col>

          <Col sm={12} md={6} lg={6} className="address">
            <h5> Address</h5>
            {this.props.loggedInUser ? (
              <div>{this.props.loggedInUser.street}</div>
            ) : (
                <Button>
                  <Link to="/account/login">Log in to buy</Link>
                </Button>
              )}
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Cart;
