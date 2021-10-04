import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Code Intelligence</Navbar.Brand>
                <Nav className="mx-auto">
                    <NavLink to="/home" className="nav-item" activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-item" aactiveStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}>
                        About
                    </NavLink>
                    <NavLink to="/services" className="nav-item" activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}>
                        Services
                    </NavLink>
                    <NavLink to="/why-coding" className="nav-item" activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}>
                        Why Coding
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;