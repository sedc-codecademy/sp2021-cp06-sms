import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'


const Navigation = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Simple Mobile Solutions</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link >Home</Nav.Link>
                    <NavDropdown  title="Производи" id="basic-nav-dropdown">
                        {props.products.map(p => (
                            <NavDropdown.Item key={"#action/" + p.id} href={"#action/3." + p.id}>{p.name}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Контакт</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navigation;