import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <div>
            <div className="top-header">
                <p className='text-center'>Discount up to 50% only this month for member medipharma.</p>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Container>
                <Navbar.Brand href="#home" className='me-5'><img src={logo} width={200} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center'>
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About Us</Nav.Link>
                    <NavDropdown title="Category" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Contact us</Nav.Link>
                    <Nav.Link href="#pricing">Service</Nav.Link>
                    
                    <NavDropdown title="Login/Register" id="collasible-nav-dropdown" className='ms-5'>
                        <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;