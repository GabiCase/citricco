import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import productService from "../../../service/products.service";
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
      showAlert: true,
      validated: true,
    };
    this.productService = new productService();
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.showAlert());
    console.log(e.target);
    if (e.target.value.length < 1) {
      this.setState({ showAlert: true });
    } else {
      this.setState({ showAlert: false });
    }
  };
  showEdit = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };
  showAlert = () => {};
  handleSubmit = () => {
    if (!this.state.showAlert) {
      this.showEdit();
      this.setState({ validated: true });
      this.productService
        .setAddress(this.props.loggedInUser._id, this.state)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log("Error", { err }));
    }
  };
  render() {
    return (
      <>
        {!this.state.showEdit | this.props.loggedInUser.name ? (
          <div>
            <h4>Your info</h4>
            <h5>
              {this.state.name}
              <br />
              {this.state.lastname}
            </h5>
            <p>{this.state.city}</p>
            <p>{this.state.postal_code}</p>
            <p>{this.state.street}</p>
            <p>{this.state.num}</p>
            <Button onClick={() => this.showEdit()}>Edit</Button>
          </div>
        ) : (
          <div className="form-newProduct">
            <h3>Create new address</h3>
            <Form
              class="needs-validation"
              novalidate
              validated={this.state.validated}
              onSubmit={() => this.handleSubmit()}
            >
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
                  placeholder="Give your post code"
                />
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
                  placeholder="Give your street"
                />
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
                  placeholder="Give your num"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
              <Link onClick={() => this.handleSubmit()} type="submit">
                Create an address
              </Link>
            </Form>
            {this.state.showAlert && <small>We need more info </small>}
          </div>
        )}
      </>
    );
  }
}
export default AddressForm;
