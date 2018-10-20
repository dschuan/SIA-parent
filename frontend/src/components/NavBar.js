import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";


const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer to="/flight">
          <NavItem>
            Flight Info
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  )
}

export default NavBar
