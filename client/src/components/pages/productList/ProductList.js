import React, { Component } from "react";

import { Modal, Button, Row, Container, Dropdown } from "react-bootstrap";

import "./ProductList.css";

import productsService from "../../../service/products.service";
import ProductCard from "./ProductCard";
import NewProduct from "../newProduct/NewProduct";
import ToastCard from '../../shared/toast/Toast'

import Spinner from "./../../shared/spinner/Spinner";

class ProductsList extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
      showModalNew: false,
      productName: ''
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

  handleModalNew = (showModalNew) => {
    this.setState({ showModalNew });
  };

  sortByPrice = () => {
    const sortedProducts = this.state.products.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );

    this.setState({ products: sortedProducts });
  };

  sortByPriceUp = () => {
    const sortedProducts = this.state.products.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );

    this.setState({ products: sortedProducts });
  };
  render() {
    return (
      <>
        <Container>
          {this.props.loggedInUser && this.props.loggedInUser.role === "admin" && (
            <Button onClick={() => this.handleModalNew(true)} size="sm">
              Create product{" "}
            </Button>
          )}

          <main>
            <h3 class="centered-text"> All products</h3>
            <div class="dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sort by price
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => this.sortByPrice()}>
                    low to high
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => this.sortByPriceUp()}>
                    high to low
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Row>
              {this.state.products.length ? (
                this.state.products.map((elm) => (
                  <ProductCard
                    loggedInUser={this.props.loggedInUser}
                    {...elm}
                    addToCart={() => this.props.addToCart(elm)}
                    key={elm._id}
                    quantity={elm.quantity}
                    fetchUser={this.props.fetchUser}
                    increase={() => this.props.increase(elm)}
                    decrease={() => this.props.decrease(elm)}
                    refreshList={this.loadProducts}

                    isFav={
                      this.props.loggedInUser &&
                      this.props.loggedInUser.fav.includes(elm._id)
                    }
                  />
                ))
              ) : (
                  <Spinner />
                )}
            </Row>
          </main>
          {this.props.toast && <ToastCard toast={this.props.toast} productName={this.props.productName} productPrice={this.props.productPrice} />}
        </Container>

        <Modal
          show={this.state.showModalNew}
          onHide={() => this.handleModalNew(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>New product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewProduct
              closeModal={() => this.handleModalNew(false)}
              refreshList={this.loadProducts}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ProductsList;
