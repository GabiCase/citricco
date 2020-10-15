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
    console.log('props en cart', this.props)
    return (
      <Container className="cart-total">
        <h3 className="text-center">Cart</h3>

        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div>
              {this.props.cart.length >= 1 ? (
                this.props.cart.map((elm) => (
                  <>
                    <CartCard
                      key={elm._id}
                      {...elm}
                      removeFromCart={() => this.props.removeFromCart(elm)}
                      decrease={() => this.props.decrease(elm)}
                      increase={() => this.props.increase(elm)} />


                  </>
                ))
              ) : (
                  <>
                    <div className="empty-cart">
                      <h4>It appears that your cart is currently empty!</h4>
                      <Button><Link to="/products/all">Start shopping!</Link></Button>
                    </div>

                  </>
                )}
              {this.props.cart.length >= 1 &&
                <div className="checkout">
                  <p>Total:<strong> {this.props.total}€</strong></p>

                  {this.props.loggedInUser ?
                    <Button><Link className="link-cart" to="/payment" > Checkout</Link></Button>
                    :
                    <Button><Link className="link-cart" to="/account/login"> Checkout</Link></Button>
                  }

                </div>}



            </div>

          </Col>

          <Col xs={12} sm={12} md={6} lg={6} className="address">
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

      </Container >
    );
  }
}

export default Cart;
