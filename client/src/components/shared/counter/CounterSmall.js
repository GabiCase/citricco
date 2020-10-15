import React from "react";
import { Button } from "react-bootstrap";

const CounterDetails = ({ quantity, counterDecrement, counterIncrement }) => {

    return (


        <>
            < div className="def-number-input number-input">

                <button onClick={() => counterIncrement()} className="plus"></button>
                <input className="quantity" name="quantity" value={quantity} onChange={() => console.log('change')}
                    type="number" />
                <button onClick={() => counterDecrement()} className="minus"></button>

            </div>




        </>
    );
}
export default CounterDetails;