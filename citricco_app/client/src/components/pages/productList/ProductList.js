import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './ProductList.css'

import productsService from '../../../service/products.service'
import ProductCard from './ProductCard'

class ProductsList extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
        this.productsService = new productsService()
    }

    componentDidMount = () => {
        this.productsService
            .getAllProducts()
            .then(response => this.setState({ products: response.data }))
            .catch(err => console.log('ERROR', err))
    }

    render() {
        return (
            <Container>
                <main>
                    <h1> All products</h1>
                    <Row>
                        {this.state.products.map(elm => <ProductCard key={elm._id} {...elm} />)}

                    </Row>



                </main>

            </Container>
        )
    }
}

export default ProductsList