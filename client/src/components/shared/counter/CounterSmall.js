import React, { Component } from "react";
import { Button } from 'react-bootstrap/Button'


class CounterDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.quantity
        };
    }


    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    reset = () => {
        this.setState({
            count: 0
        });
    };

    render() {
        console.log('props de counter small', this.props)
        return (

            <div>
                <button className='inc btn btn-light' onClick={this.increment}>+</button>
                <button className='dec btn btn-light' onClick={this.decrement}>-</button>
                <button className='reset btn btn-light' onClick={this.reset}>Reset</button>
                <p>{this.state.count}</p>
            </div>
        );
    }
};
export default CounterDetails