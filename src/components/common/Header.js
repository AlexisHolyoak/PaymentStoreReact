import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";


const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand exact href="/">First Store
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavLink to="purchase">Shopping cart</NavLink>
    </Nav>
    <Nav>
      <NavLink to="purchase">Shopping cart |</NavLink>
      <NavLink to="orders">Orders |</NavLink>
      <NavLink to="/login"> Login</NavLink>

    </Nav>
  </Navbar.Collapse>
</Navbar>
)


export default Header
