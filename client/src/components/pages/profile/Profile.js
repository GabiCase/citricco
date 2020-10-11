import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import authService from './../../../service/auth.service'
import AddressForm from './AddressForm'

export default class extends Component {

    constructor(props) {
        super()
        this.state = {}
        this.authService = new authService();
    }


    logoutUser = () => {

        this.authService

            .logout()
            .then(() =>
                this.props.setTheUser(null),
                this.props.history.push("/"))
            .catch((err) => console.log("ERROR", err));
    }


    render() {

        return (
            <>

                < Container >
                    <h2>hi, {this.props.loggedInUser.username}!</h2>
                    <p>Not {this.props.loggedInUser.username}?<Link onClick={() => this.logoutUser()}> Logout </Link></p>

                    <AddressForm loggedInUser={this.props.loggedInUser} />


                </Container >
            </>


        )
    }


}