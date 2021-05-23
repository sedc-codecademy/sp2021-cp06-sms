import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=3");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }

  const productClickHandler = (id) => {
    setSingleProduct(products.filter(x => x.id === id));
  }
  console.log(singleProduct);

  return (
    <div className="App">
      <Navigation products={products} />
      <Container>
        <Row>
          {products.map(p => (
            <Col key={p.id} xs={12} md={12} lg={4}>
              <Product
                name={p.name}
                img={p.image_url}
                description={p.description}
                onClick = {() => productClickHandler(p.id)}
              />
            </Col>

          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
