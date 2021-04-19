import React from 'react';
import './Card.css'
const Card = (props) => {

    return (
        <div className="Card">
            <div>{props.img}</div>
            <div>{props.title}</div>
            <div>{props.description}</div>
            <button type="button">More info</button>
        </div>
    )
}
export default Card;