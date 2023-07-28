import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderBar() {
    return (
        <Navbar expand="lg" className=" shadow-lg p-3 mb-5 bg-white rounded">
            <Container>
                <Navbar.Brand href="/">BeOne</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <LinkContainer to="/surveyWalkWithGod">
                            <Nav.Link>Caminhada Com Deus</Nav.Link>
                        </LinkContainer> */}
                        <NavDropdown title="Questionários" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/surveyGodGifts">Inventário de Dons</NavDropdown.Item>
                            <NavDropdown.Item href="/surveyWalkWithGod">
                                Caminhada com Deus
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderBar;