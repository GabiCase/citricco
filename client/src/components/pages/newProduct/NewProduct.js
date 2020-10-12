import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import "./NewProduct.css";

import productService from "./../../../service/products.service";
import fileService from "./../../../service/files.service";

import Spinner from './../../shared/spinner/Spinner'


class NewProduct extends Component {
  constructor(props) {
    super();
    this.state = {
      product: {
        name: "",
        description: "",
        price: "",
        category: "",
        imageUrl: ""
      },
      uploadingImage: false
    }
    this.productService = new productService();
    this.fileService = new fileService();
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ product: { ...this.state.product, [name]: value } })
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.productService
      .newProduct(this.state.product)
      .then(() => {
        this.props.closeModal();
        this.props.refreshList();
      })
      .catch((err) => console.log("Error", { err }));
  };

  handleImageUpload = e => {
    this.setState({ uploadingImage: true })

    const uploadData = new FormData()
    uploadData.append('imageUrl', e.target.files[0])

    this.fileService
      .uploadImage(uploadData)
      .then((response) => this.setState({
        product: { ...this.state.product, imageUrl: response.data.secure_url },
        uploadingImage: false
      }))
      .catch((err) => console.log("Error", err));
  }

  render() {
    return (
      <>
        <div className="form-newProduct">
          <h3>Create new product</h3>
          <Form onSubmit={this.handleFormSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={this.state.product.name}
                name="name"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Give your product a name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                pattern="^\d*(\.\d{0,2})?$"
                value={this.state.product.price}
                name="price"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Give your product a price"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image{this.state.uploadingImage && <Spinner />}</Form.Label>
              <Form.Control
                multiple
                name="imageUrl"
                onChange={this.handleImageUpload}
                type="file"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={this.state.product.description}
                name="description"
                onChange={this.handleInputChange}
                as="textarea"
                rows="3"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                value={this.state.product.category}
                name="category"
                onChange={this.handleInputChange}
                as="select"
              >
                <option>Select</option>
                <option value="hoops">Hoops</option>
                <option value="pendants">Pendants</option>
              </Form.Control>
            </Form.Group>
            <Button type="submit">Create product</Button>
          </Form>
        </div>
      </>
    );
  }
}

export default NewProduct;
