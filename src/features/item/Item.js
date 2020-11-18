import React, { useState } from "react";

import './Item.css';

const Item = props => {

    const [statusPos, setstatusPos] = useState(0);
    const status = [
        { status: "onhold" },
        { status: "done" },
        { status: "suspended" }
    ];

    function changeStatus() {
        if (statusPos >= 2) {
            setstatusPos(0);
        } else {
            setstatusPos(statusPos + 1)
        }
    }

    return (
        <tr className={`item ${status[statusPos].status}`} id="item" >
            <td>{props.feature}</td>
            <td>{props.description}</td>
            <td className="td_status" onClick={changeStatus}>{status[statusPos].status}</td>
            <td>{props.duration} h.</td>
            <td>
                <button onClick={props.deleteItem}>X</button>
                <button>+</button>
                <button>-</button>
            </td>
        </tr >
    )
};
export default Item;