import React from 'react'
import { Navbar, NavbarBrand, NavbarText, Collapse, NavItem, NavLink, Nav, NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => setisOpen(!isOpen)
  return (
    <Navbar dark color='primary' expand="md" >
      <NavbarBrand tag={Link} to='/home' >
        Sorrawit Kwanja
      </NavbarBrand>
      <NavbarToggler className='me-2' onClick={toggle} />
      <Collapse navbar isOpen={isOpen} >
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink tag={Link} to='/home' >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/photo' >
              Photo Gallery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/about' >
              About me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/order' >
              Order Food
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/cart' >
              Cart
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header