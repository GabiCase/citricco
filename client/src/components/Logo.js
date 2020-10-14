import React, { Component } from "react";
import citricco from "./images/citricco.png";
export default class extends Component {
  constructor(props) {
    super();
    this.state = {
      rotation: -25,
    };
  }
  componentDidMount = () => {
    this.moveLogo();
  };
  moveLogo = (e) => {
    document.addEventListener("mousemove", (e) => {
      this.setState({ rotation: this.state.rotation + e.pageY / 1100 });
      // e.pageY < 500
      //   ? this.setState({ rotation: this.state.rotation + e.pageY / 1000 })
      //   : this.setState({ rotation: this.state.rotation - e.pageY / 2000 });
    });
  };

  render() {
    return (
      <>
        <img
          src={citricco}
          alt="logo-piece"
          style={{ transform: `rotate(${this.state.rotation}deg)` }}
        />
      </>
    );
  }
}
