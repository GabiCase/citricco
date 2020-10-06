import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./ProductList.css";

import productsService from "../../../service/products.service";
import ProductCard from "./ProductCard";
import NewProduct from "../newProduct/NewProduct";

import Spinner from './../../shared/spinner/Spinner'

class ProductsList extends Component {

  constructor(props) {
    super();
    this.state = {
      products: [],
      showModal: false,
      cart: []
    };
    this.productsService = new productsService();
  }

  componentDidMount = () => {
    this.loadProducts();
  };
  loadProducts = () => {
    this.productsService
      .getAllProducts()
      .then((response) => this.setState({ products: response.data }))
      .catch((err) => console.log("ERROR", err));
  };

  handleModal = (showModal) => this.setState({ showModal });

  addToCart = (product) => {
    console.log('estás añadiendo', product)
    const cartCopy = [...this.state.cart]
    cartCopy.push(product)
  }

  render() {

    return (
      <>
        <Container>
          {this.props.loggedInUser && this.props.loggedInUser.role === 'admin' && <Button onClick={() => this.handleModal(true)} size="sm">Create product </Button>}
          <main>
            <h1> All products</h1>
            <Row>
              {
                this.state.products.length
                  ?
                  this.state.products.map(elm =>
                    <ProductCard addToCart={() => this.addToCart(elm._id)} key={elm._id} {...elm} />)
                  :
                  <Spinner />
              }
            </Row>
          </main>
        </Container>

        <Modal
          show={this.state.showModal}
          onHide={() => this.handleModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>New product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewProduct
              closeModal={() => this.handleModal(false)}
              refreshList={this.loadProducts}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ProductsList;
