import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {signOut } from 'firebase/auth';
const Header = () => {
    const [user]=useAuthState(auth);
    const handelSinout=()=>{
        signOut(auth)
    }
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
                            <Nav.Link  className='text-white fs-4'href="home#service">Services</Nav.Link>
                            <Nav.Link as={Link}to="/about" className='text-white fs-4' href="#deets">About me</Nav.Link>

                        </Nav>
                        <Nav>
                           
                            {user? <Nav.Link onClick={handelSinout} className='text-white fs-4'>
                                Singout
                            </Nav.Link>
                            : <Nav.Link as={Link} to="/singup" className='text-white fs-4'>
                                Singup
                            </Nav.Link>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;