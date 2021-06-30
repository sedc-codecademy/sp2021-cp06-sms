import {React} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product'

const Home = (props) => {

    return (
        <div className="container">
        <Container>
        <Row>
          {props.products.map(p => (
            <Col key={p.id} xs={12} md={12} lg={4}>
              <Product
                name={p.name}
                img={p.image_url}
                description={p.description}
                id = {p.id}
                />
            </Col>
          ))}
        </Row>
        </Container>
        </div>
    )
}


export default Home;