import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Nabvar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <div className="container-fluid">
        <Navbar.Brand href="/" style={{ fontSize: '25px', marginLeft: '50px' }}>Travel LP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ color: '#FFDF00' }}>HOME</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ fontSize: '20px' }}>
                All LIST
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href='/food'>Top Makanan</Dropdown.Item>
                <Dropdown.Item href="/destination">Top Wisata</Dropdown.Item>
                <Dropdown.Item href="/rent">Harga Sewa</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="/contact" style={{ color: '#FFDF00' }}>CONTACT</Nav.Link>
            {<Nav.Link href="#crew" style={{ color: '#FFDF00' }}>About Us</Nav.Link> }
            {/* {<Nav.Link href="#project" style={{ color: '#FFDF00' }}>PROJECT</Nav.Link> } */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}