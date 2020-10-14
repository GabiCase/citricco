import React, { Component } from "react";

import productsService from "./../../../service/products.service";

import { Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import SuggestionCard from "./SuggestionCard";

class Suggestions extends Component {

  constructor(props) {
    super();
    this.state = {
      products: [],
      showSuggestion: false,
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

  render() {
    const suggCopy = [...this.state.products];
    const suggFiltered = suggCopy.filter((elm) =>
      elm.name.toUpperCase().match(this.props.search.toUpperCase())
    );

    return (
      <>
        <Container className="suggestions-box">
          <Row className="border-bottom">

            {suggFiltered < 1 ? (
              <p>
                No matches found! You can see all of our products
                <Link to="/products/all">here</Link>
              </p>
            ) : (

                suggFiltered.map((elm) =>
                  <SuggestionCard
                    hiddeSuggestion={this.props.hiddeSuggestion}
                    key={elm._id}

                    {...elm} />)
              )
            }

          </Row>
        </Container>


      </>
    );
  }
}
export default Suggestions;
