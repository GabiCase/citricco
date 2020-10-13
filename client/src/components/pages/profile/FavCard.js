import React, { Component } from 'react'

import productService from '../../../service/products.service'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class FavCard extends Component {
    constructor(props) {
        super()
        this.state = {
            product: ""
        }
        this.productService = new productService()
    }

    componentDidMount = () => this.loadProductById()

    loadProductById = () => {
        this.productService
            .getOneProduct(this.props.id)
            .then(response => this.setState({ product: response.data }))
    }

    render() {
        console.log('soy las props de favCard', this.props.id)
        return (

            <>

                <div className="brick">
                    <Link className="delete-content" to="#">Delete</Link>

                    <img src={this.state.product.imageUrl} alt={this.state.product.name} title="" />

                    <h4>{this.state.product.name}</h4>
                    <div>{this.state.product.price}€</div>


                    <Button onClick={() => this.props.addToCartDet(this.state.product)}>Add to cart</Button>

                </div>

            </>
        )
    }


}

export default FavCard









