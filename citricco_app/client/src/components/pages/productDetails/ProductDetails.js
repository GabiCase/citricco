import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import productService from "./../../../service/products.service";

class ProductDetails extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.productService = new productService();
  }

  componentDidMount = () => {
    this.productService
      .getOneProduct(this.props.match.params.product_id)
      .then((res) => this.setState(res.data))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <>
        <Container className="details">

          <main>
            <Row>
              <Col sm={12} md={5}>
                <img src={this.state.image} alt={this.state.name} />
              </Col>
              <Col sm={12} md={4}>
                <h4>{this.state.name}</h4>
                {this.state.description}

                <div>{this.state.price}€</div>
                <div>{this.state.category}</div>
                <div className="buttons">
                  <div className="counter">
                    <Button>-</Button>
                    <p>{this.state.quantity}</p>
                    <Button>+</Button>
                  </div>

                  <Button>Add to cart</Button>
                  <Button>Add to wishlist</Button>
                </div>
              </Col>
            </Row>
          </main>
        </Container>
      </>
    );
  }
}

export default ProductDetails;
