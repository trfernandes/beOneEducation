import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function FooterBar() {

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                       
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}