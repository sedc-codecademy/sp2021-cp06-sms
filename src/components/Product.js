import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import './Product.css'


const Product = (props) => {

    return (
        <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={props.img} height="250px" width="250px" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description.length > 30 ? props.description.slice(0, 30) + "..." : props.description}
                </Card.Text>
            </Card.Body>
            <Link to={`/product/${props.id}`}>
            <Button className="btn btn-secondary"onClick={props.onClick} variant="primary">Дознај Повеќе</Button>
            </Link>
            
        </Card>
    )
}
export default Product;