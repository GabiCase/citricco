import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./ProductList.css";

import productsService from "../../../service/products.service";
import ProductCard from "./ProductCard";
import NewProduct from "../newProduct/NewProduct";

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      showModal: false,
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

  render() {
    return (
      <>
        <Container>
          <Button onClick={() => this.handleModal(true)} size="sm">
            Create product
          </Button>

          <main>
            <h1> All products</h1>
            <Row>
              {this.state.products.map((elm) => (
                <ProductCard key={elm._id} {...elm} />
              ))}
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
