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
  componentDidUpdate = (prevState) => {

    if (prevState.match.params.product_id !== this.props.match.params.product_id) {

      this.loadProducts();
    }
  };



  render() {


    return (
      <div>
        {this.state.product && (
          <>
            <Container className="details">
              <main>
                <div >
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


                <Row>
                  <Col sm={10} md={6} className="img-details">
                    <SimpleSlider imageUrl={this.state.product.imageUrl} />
                  </Col>
                  <Col sm={10} md={6}>
                    <h4>{this.state.product.name}</h4>
                    <div>
                      <p className="categoryp"> <Link
                        to={`/products/category/${this.state.product.category}`}
                      >
                        Category: {this.state.product.category}
                      </Link></p>
                    </div>
                    <p className="detailsp">{this.state.product.description}</p>
                    <div>{this.state.product.price}€</div>
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
                        <Col xs={6} md={6} lg={12}>
                          <Button onClick={() => this.props.addToCartDet(this.state.product)} clasName="btn btn-dark"><Link to="/cart" >Buy it now!</Link></Button>
                        </Col>
                        <Col xs={6} md={6} lg={12}>
                          <Button onClick={() => this.props.addToCartDet(this.state.product)}>Add to cart</Button>
                        </Col>


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