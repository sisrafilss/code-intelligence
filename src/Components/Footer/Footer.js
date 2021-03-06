import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Navbar className="pt-4" bg="dark" variant="dark">
                <Container>
                    <Nav className="">
                        <Nav.Link href="">Terms and Condition</Nav.Link>
                        <Nav.Link href="">Privicy Policy</Nav.Link>
                        <Nav.Link href="">Refund Policy</Nav.Link>
                    </Nav>
                    <Nav className="">
                        <Nav.Link href=""><i className="fab fa-facebook-square"></i></Nav.Link>
                        <Nav.Link href=""><i className="fab fa-twitter-square"></i></Nav.Link>
                        <Nav.Link href=""><i className="fab fa-youtube"></i></Nav.Link>
                    </Nav>

                </Container>

            </Navbar>
            <div className="bg-dark pt-3 pb-2">
                <p className="text-center text-light">Copyright &copy; 2021 Code Intelligence</p>
            </div>
        </div>
    );
};

export default Footer;