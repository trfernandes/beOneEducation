import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../styles/components/headerbar.css'

function HeaderBar() {
    return (
        <Navbar expand="lg" className=" shadow-lg p-3 mb-5 bg-white rounded">
            <Container>
                <Navbar.Brand href="/">BeOne</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Questionários" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to="/inventarioDons" className="text-decoration-none text-dark font-weight-bold">Inventário de Dons</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/caminhadaDeus" className="text-decoration-none text-dark font-weight-bold">Caminhada com Deus</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderBar;