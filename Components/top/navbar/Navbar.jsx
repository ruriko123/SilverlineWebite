import React from 'react'
import "./navbar.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

function Navbarcomponent({type}) {
    return (
        
        <Navbar
            className=''
            variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src="companylogo.jpg"
                        width="80"
                        height="60"
                        className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Nav  className='pull-right d-flex bd-highlight mb-3'>
                   {!(type==="home") && 
                    <Nav.Link  as={Link} className="m-auto" href="/">Home</Nav.Link>
                   }
                    {!(type==="about") && 
                     <Nav.Link  as={Link} className="m-auto" href="/about">About</Nav.Link>
                   }
                     {!(type==="services") && 
                    <Nav.Link  as={Link} className="m-auto" href="/pricing">Services</Nav.Link>
                   }
                   {!(type==="contact") && 
                    <Nav.Link  as={Link} className="m-auto" href="/contact">Contact</Nav.Link>
                   }
                  
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Navbarcomponent