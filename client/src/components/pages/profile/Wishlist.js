import React, { Component } from 'react'

import productService from '../../../service/products.service'
import { Container } from 'react-bootstrap'
import FavCard from './FavCard'

import './Wishlist.css'

class Wishlist extends Component {
    constructor(props) {
        super()
        this.state = {
            favArray: []
        }
        this.productService = new productService()
    }

    componentDidMount = () => this.getUserFav()

    getUserFav = () => {
        console.log('HOLA he llegado hasta aquiiiii')
        this.productService
            .getFavs(this.props.userId)
            .then(response => this.setState({ favArray: response.data.fav }))
            .catch((err) => console.log("ERROR", err));

    }


    render() {

        console.log('props de wishlist', this.props.userId)
        console.log('SOY FAVARRAY', this.state.favArray)
        return (
            <>
                <h2>Wishlist</h2>
                <div className="container">
                    <div className="wrapper">
                        <div className="tittle">
                            <h3></h3>
                        </div>

                        <div className="grid gutterless">
                            {this.state.favArray.map(elm => <FavCard key={elm} id={elm} />
                            )}
                        </div>
                    </div >
                </div>
            </>
        )
    }


}

export default Wishlist





