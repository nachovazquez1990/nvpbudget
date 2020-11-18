import React from "react";

import './Results.css';

const Results = props => {
    let total = props.time * props.rate;

    return (
        <div className="results">
            <div>
                <h1>Time -</h1>
                <p>{props.time} Hours</p>
            </div>
            <div>
                <h1>Rate -</h1>
                <p>{props.rate} €/Hour</p>
                <div className="results_buttons">
                    <button onClick={props.rateUp}>+</button>
                    <button onClick={props.rateDown}>-</button>
                </div>
            </div>
            <div>
                <h1>Cost -</h1>
                <p>{total} €</p>
            </div>
        </div>
    )
};
export default Results;