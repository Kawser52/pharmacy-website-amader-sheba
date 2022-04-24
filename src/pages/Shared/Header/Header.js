import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <div className="top-header">
                <p className='text-center'>Discount up to 50% only this month for member medipharma.</p>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                <Container className='p-3'>
                <Navbar.Brand href="#home" className='me-5'><img src={logo} width={200} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center'>
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link href="#pricing">About Us</Nav.Link>
                    <NavDropdown title="Category" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">Contact us</Nav.Link>
                    <Nav.Link href="#pricing">Service</Nav.Link>
                    
                    <NavDropdown title={user.email?
                    user.displayName:
                    <span>Login/Register</span>
                    } id="collasible-nav-dropdown" className='ms-5'>
                        {
                            user.email? 
                            <Button variant='light' bg='transparent' onClick={logOut}>Logout</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;