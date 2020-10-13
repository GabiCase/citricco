import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProductDetails.css";

import { Button, Modal, Col, Row, Container } from "react-bootstrap";

import productService from "./../../../service/products.service";
import CounterDetails from "./../../shared/counter/CounterSmall";

import EditProduct from "../editProduct/EditProduct";
import SimpleSlider from "./Slider";

class ProductDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      product: undefined,
      showModalEdit: false,
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



  render() {


    return (
      <div>
        {this.state.product && (
          <>
            <Container className="details">
              <main>
                <Row>
                  <Col sm={12} md={5}>
                    <SimpleSlider imageUrl={this.state.product.imageUrl} />
                  </Col>
                  <Col sm={12} md={4}>
                    <h4>{this.state.product.name}</h4>
                    {this.state.product.description}
                    <div>{this.state.product.price}€</div>
                    <div>
                      <Link
                        to={`/products/category/${this.state.product.category}`}
                      >
                        {this.state.product.category}
                      </Link>
                    </div>
                    {this.state.product && (
                      <CounterDetails
                        props={this.props}
                        quantity={this.props.quantity}
                        counterIncrement={this.props.counterIncrement}
                        counterDecrement={this.props.counterDecrement}
                        counterReset={this.counterReset}
                      />
                    )}
                    <div className="buttons">
                      <Row>
                        <Col>
                          <Button onClick={() => this.props.addToCartDet(this.state.product)}>Add to cart</Button>
                        </Col>
                        <Col>
                          <Link onClick={() => this.props.addToCartDet(this.state.product)} to="/cart" clasName="btn btn-dark">Buy it now!</Link>
                        </Col>
                        <Col ml={12}>
                          <Button>Add to wishlist</Button>
                        </Col>

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
                      </Row>

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
        )
        }
      </div>
    );
  }
}
export default ProductDetails;