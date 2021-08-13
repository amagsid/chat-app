import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Dropdown, NavLink, NavItem } from 'react-bootstrap'
import { BiLogOut } from "react-icons/bi";
import { RiListSettingsLine } from "react-icons/ri";


function NavBar() {
    const signOut = () => {
        localStorage.setItem('username', '');
        localStorage.setItem('password', '');
    
        window.location.reload();
      }


      const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={e => {
            e.preventDefault();
            onClick(e);
          }}
        >
            <RiListSettingsLine size={30} style={{color:'purple'}}/>
          {children}
        </a>
      ));

    return (
        <>
    <Dropdown>
  <Dropdown.Toggle as={CustomToggle}  variant="dark" id="dropdown-basic">
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/profile">Profile (work in progress)</Dropdown.Item>
    {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
    <NavDropdown.Divider />
    <Dropdown.Item  onClick={signOut}> <BiLogOut size={20} style={{color:'purple'}}/> logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

        </>
   
    )
}

export default NavBar
