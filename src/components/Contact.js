import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
const Contact = () => {
  return (
    <div className="container">
      <Container className="p-3">
          <h3 class="mb-2">ИСПРАТИ ПОРАКА</h3>
        <Container>
          <Row>
            <Col className="col-md-12 col-lg-6 col-sm-12">
              <Jumbotron>
                <h1 className="header">За нас</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed mattis suscipit ipsum, at commodo nisi tincidunt eget.
                  Praesent condimentum et libero et tristique.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed mattis suscipit ipsum, at commodo nisi tincidunt eget.
                  Praesent condimentum et libero et tristique.                 </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed mattis suscipit ipsum, at commodo nisi tincidunt eget.
                  Praesent condimentum et libero et tristique.                   </p>
              </Jumbotron>
            </Col>
            <Col className="col-md-12 col-lg-6 col-sm-12 col-xs-12" >
              <Form>
                <Form.Group as={Col} controlId="formGridEmail" className="mb-5">
                  <Form.Label >Е-маил</Form.Label >
                  <Form.Control  className="mb-2" type="email" placeholder="Е-маил" />
                  <Form.Label>Име и Презиме</Form.Label>
                  <Form.Control type="Username" placeholder="Име и Презиме" />
                  <Form.Label>Телефонски број</Form.Label>
                  <Form.Control placeholder="Телефонски број" />
                  <Form.Label >Напиши ја тука твојата порака</Form.Label>
                  <Form.Control placeholder="Твојата порака" />
                  </Form.Group>
                  <Button className="btn btn-secondary">Испрати</Button>
                </Form>
                </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Contact;