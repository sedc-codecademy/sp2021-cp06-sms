import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Product = (props) => {

    return (
        <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={props.img} height="300px" width="300px" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description.length > 150 ? props.description.slice(0, 75) + "..." : props.description}
                </Card.Text>
            </Card.Body>
            <Button onClick={props.onClick}variant="primary">Дознај повеќе</Button>
        </Card>
    )

}
export default Product;