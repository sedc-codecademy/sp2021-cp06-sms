import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
      <Navbar.Brand>Simple Mobile Solutions</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Дома</Link>
          <NavDropdown title="Производи" id="basic-nav-dropdown">
            {props.products.map((p) => (
              <Link className="dropdown-item" to={`/product/${p.id}`} key={p.id}>{p.name}</Link>
            ))}
          </NavDropdown>
        </Nav>
        <Nav>
          <Link className="nav-link" to="/contact">Контакт</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
