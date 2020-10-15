import React, { Component } from 'react'
import { Toast } from 'react-bootstrap'


export default class ToastCard extends Component {


    constructor(props) {
        super()
        this.state = {
            visible: props.toast
        }
    }

    render() {
        console.log('props de toast', this.props.toast)
        return (


            <Toast onClose={() => this.setState({ visible: false })} show={this.state.visible} delay={3000} autohide
                style={{
                    position: 'fixed',
                    top: 60,
                    right: 40,
                    width: 250
                }}
            >


                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                    />
                    <strong className="mr-auto">Cart</strong>
                    <small>You just added a new item!</small>
                </Toast.Header>
                <Toast.Body style={{ marginLeft: 6 }}>
                    {this.props.name ? this.props.name : this.props.productName} - {this.props.price ? this.props.price : this.props.productPrice}€
                </Toast.Body>
            </Toast>


        )

    }
}
