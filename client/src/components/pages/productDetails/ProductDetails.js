import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './ProductDetails.css'
import { Button, Modal, Col, Row, Container } from "react-bootstrap";

import productService from "./../../../service/products.service";

import CounterDetails from "./../../shared/counter/CounterSmall";

import EditProduct from "../editProduct/EditProduct";
import SimpleSlider from './Slider'

class ProductDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      product: undefined,
      showModalEdit: false,
      quantity: 0
    };
    this.productService = new productService();
  }

  handleModalEdit = (showModalEdit) => this.setState({ showModalEdit });

  componentDidMount = () => this.loadProducts();

  delete = () => {
    this.productService
      .deleteProduct(this.props.match.params.product_id)
      .then(() => this.props.history.push("/products/all"))
      .catch((err) => console.log(err));
  };

  loadProducts = () => {
    this.productService
      .getOneProduct(this.props.match.params.product_id)
      .then((res) => this.setState({ product: res.data }))
      .catch((err) => console.log(err));
  };

  // addToCartDetails = (product) => {

  //   const cartCopy = [...this.state.cart];
  //   let itemInCart = cartCopy.find((elm) => elm.name === product.name);

  //   if (itemInCart) {
  //     itemInCart.quantity++;
  //   } else {
  //     itemInCart = {
  //       ...product,
  //       quantity: 1,
  //     };
  //     cartCopy.push(itemInCart);
  //   }
  //   this.setState({ cart: cartCopy });
  // };

  render() {
    console.log('TODAS LAS PROPS DE DETAILS', this.props)
    return (
      <div>
        {this.state.product && (
          <>
            <Container className="details">
              <main>
                <Row>
                  <Col sm={12} md={5}>
                    <SimpleSlider img={this.state.product.image} />
                  </Col>
                  <Col sm={12} md={4}>
                    <h4>{this.state.product.name}</h4>
                    {this.state.product.description}

                    <div>{this.state.product.price}€</div>
                    <div><Link to={`/products/category/${this.state.product.category}`}>{this.state.product.category}</Link>
                    </div>

                    {this.state.product &&
                      <CounterDetails
                        props={this.props}
                        quantity={this.state.product.quantity}
                        increase={() => this.props.increase(this.state.product)}
                        decrease={() => this.props.decrease(this.state.product)}
                      />}


                    <div className="buttons">
                      <Button onClick={() => this.props.addToCart(this.state.product)}>Add to cart</Button>
                      <Button>Add to wishlist</Button>
                      {this.props.loggedInUser &&
                        this.props.loggedInUser.role === "admin" && (
                          <Button
                            onClick={() => this.handleModalEdit(true)}
                            size="sm"
                          >
                            Edit product
                          </Button>
                        )}
                      {this.props.loggedInUser &&
                        this.props.loggedInUser.role === "admin" && (
                          <Button onClick={this.delete} size="sm">
                            Delete product
                          </Button>
                        )}
                    </div>
                  </Col>
                </Row>
              </main>
            </Container>
            <Modal
              show={this.state.showModalEdit}
              onHide={() => this.handleModalEdit(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Edit product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditProduct
                  product={this.state.product}
                  closeModal={() => this.handleModalEdit(false)}
                  refreshList={this.loadProducts}
                />
              </Modal.Body>
            </Modal>
          </>
        )}
      </div>
    );
  }
}

export default ProductDetails;
