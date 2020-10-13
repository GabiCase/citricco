import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./ProductList.css";
import productsService from "../../../service/products.service";
import ProductCard from "./ProductCard";
import Spinner from "./../../shared/spinner/Spinner";
class Category extends Component {
    constructor(props) {
        super();
        this.state = {
            products: [],
            showModalNew: false,
        };
        this.productsService = new productsService();
    }
    componentDidMount = () => {
        this.loadProducts();

    };
    loadProducts = () => {
        this.productsService
            .getCategory(this.props.match.params.category)
            .then((response) => this.setState({ products: response.data }))
            .catch((err) => console.log("ERROR", err));
    };
    componentDidUpdate = (prevState) => {


        if (prevState.match.params.category !== this.props.match.params.category) {

            this.loadProducts();
        }
    };
    handleModalNew = (showModalNew) => {
        this.setState({ showModalNew });
    };
    render() {
        return (
            <>
                <Container>
                    <main>
                        <h1> {this.props.match.params.category}</h1>
                        <Row>
                            {this.state.products.length ? (
                                this.state.products.map((elm) => (
                                    <ProductCard
                                        loggedInUser={this.props.loggedInUser}
                                        {...elm}
                                        addToCart={() => this.props.addToCart(elm)}
                                        key={elm._id}
                                        quantity={elm.quantity}
                                        increase={() => this.props.increase(elm)}
                                        decrease={() => this.props.decrease(elm)}
                                        refreshList={this.loadProducts}
                                    />
                                ))
                            ) : (
                                    <Spinner />
                                )}
                        </Row>
                    </main>
                </Container>
            </>
        );
    }
}
export default Category;