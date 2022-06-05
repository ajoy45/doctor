import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-info'>


            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand  as={Link}to="/">
                        <img width={80} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link as={Link} to="/home" className='text-white fs-4' >Home</Nav.Link>
                            <Nav.Link as={Link}to="/services" className='text-white fs-4'href="#pricing">Services</Nav.Link>
                            <Nav.Link as={Link}to="/about" className='text-white fs-4' href="#deets">About me</Nav.Link>

                        </Nav>
                        <Nav>
                           
                            <Nav.Link as={Link} to="/singup" className='text-white fs-4' href="#memes">
                                Singup
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;