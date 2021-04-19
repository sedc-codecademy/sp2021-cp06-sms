import React from 'react';
import './Navigation.css';
const Navigation = (props) => {
    return (
        <div className={"AppBar"}>
            <div>{props.title}</div>
            <div>{props.home}</div>
            <div>{props.items}</div>
            <div>{props.contact}</div>
        </div>
    )
}

export default Navigation;