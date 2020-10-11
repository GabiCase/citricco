import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import productService from '../../../service/products.service'

class AddressForm extends Component {
    constructor(props) {
        super();
        this.state = {
            name: props.loggedInUser.name,
            lastname: props.loggedInUser.lastname,
            city: props.loggedInUser.city,
            postal_code: props.loggedInUser.postal_code,
            street: props.loggedInUser.street,
            num: props.loggedInUser.num,
            showEdit: false,
            validated: false,
            setValidate: false

        }

        this.productService = new productService()
    }



    // componentDidMount = () => this.checkProps()

    // checkProps = () => {
    //     if (this.props.name) {
    //         this.setState({ name: this.props.name })
    //     } if (this.props.lastname) {
    //         this.setState({ lastname: this.props.lastname })
    //     } if (this.props.city) {
    //         this.setState({ city: this.props.city })
    //     } if (this.props.postal_code) {
    //         this.setState({ postal_code: this.props.postal_code })
    //     } if (this.props.street) {
    //         this.setState({ street: this.props.street })
    //     } if (this.props.num) {
    //         this.setState({ num: this.props.num })
    //     }
    // }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    };

    // handleFormSubmit = (e) => {
    //     e.preventDefault();

    //     this.productService
    //         .setAddress(this.props.loggedInUser._id, this.state)
    //         .then((response) => {

    //             console.log(response)
    //         })
    //         .catch((err) => console.log("Error", { err }));

    // };

    showEdit = () => {
        this.setState({ showEdit: !this.state.showEdit })
    }



    handleSubmit = (event) => {
        this.setState({ validated: false, setValidated: false });
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.productService
                .setAddress(this.props.loggedInUser._id, this.state)
                .then((response) => {

                    console.log(response)
                })
                .catch((err) => console.log("Error", { err }));
        }
        this.state.setValidated(true);
    }


    render() {

        return (
            <>
                { !this.state.showEdit | this.props.loggedInUser.name ?
                    <div>
                        <h3>Your current address</h3>
                        <h4>{this.state.name}{this.state.lastname}</h4>
                        <p>{this.state.city}</p>
                        <p>{this.state.postal_code}</p>
                        <p>{this.state.street}</p>
                        <p>{this.state.num}</p>
                        <Button onClick={() => this.showEdit()}>Edit</Button>
                    </div>
                    :
                    <div className="form-newProduct">
                        <h3>Create new address</h3>
                        <Form noValidate validated={this.state.validated} onSubmit={() => this.handleSubmit()}>
                            <Form.Group controlId="validationCustom01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Give your name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control
                                    required
                                    value={this.state.lastname}
                                    name="lastname"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Give your lastname"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationCustomUsername">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    required
                                    value={this.state.city}
                                    name="city"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Give your city"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationCustom03">
                                <Form.Label>Postal code</Form.Label>
                                <Form.Control
                                    required
                                    value={this.state.postal_code}
                                    name="postal_code"
                                    onChange={this.handleInputChange}
                                    type="number"
                                    placeholder="Give your post code" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationCustom04">
                                <Form.Label>Street</Form.Label>
                                <Form.Control
                                    required
                                    value={this.state.street}
                                    name="street"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Give your street" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationCustom05">
                                <Form.Label>Num</Form.Label>
                                <Form.Control
                                    required
                                    value={this.state.num}
                                    name="num"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="Give your num" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                 </Form.Control.Feedback>
                            </Form.Group>
                            <Button onClick={() => this.showEdit()} type="submit">Create an address</Button>
                        </Form>
                    </div>
                }
            </>
        )
    };

}
export default AddressForm;