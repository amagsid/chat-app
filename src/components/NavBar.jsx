import React from 'react'
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { BiLogOut } from "react-icons/bi";

   // <div>
        //     <button className='logout-button' onClick={signOut}> logout </button>
            
        // </div>

function NavBar() {
    const signOut = () => {
        localStorage.setItem('username', '');
        localStorage.setItem('password', '');
    
        window.location.reload();
      }

    return (
        <Navbar bg="light" expand="lg">
        <Container>
      
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="Go to" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Chat settings (coming soon)</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Profile (coming soon)</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signOut} href="#action/3.4"><BiLogOut/> Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar
