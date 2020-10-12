import React, { Component } from "react";
import { Button } from "react-bootstrap";
class CounterDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterQuantity: 0,
        };
    }
    refreshIncrement = () => {
        this.setState({ counterQuantity: this.props.quantity });
        this.props.counterIncrement();
    };
    refreshDecrement = () => {
        this.setState({ counterQuantity: this.props.quantity });
        this.props.counterDecrement();
    };
    refreshReset = () => {
        this.setState({ counterQuantity: this.props.quantity });
        this.props.counterIncrement();
    };
    render() {
        return (
            <div>
                <Button
                    className="inc btn btn-light"
                    onClick={() => this.refreshIncrement()}
                >
                    +
        </Button>
                <Button
                    className="dec btn btn-light"
                    onClick={() => this.refreshDecrement()}
                >
                    -
        </Button>
                <Button
                    className="reset btn btn-light"
                    onClick={() => this.refreshReset()}
                >
                    Reset
        </Button>
                <p>{this.state.counterQuantity}</p>
            </div>
        );
    }
}
export default CounterDetails;