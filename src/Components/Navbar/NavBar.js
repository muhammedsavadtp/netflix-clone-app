import React from 'react'
import './NavBar.css'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <navbar className='navbar  '>
      <Link to="/" className='Logo'> <img className='Logo-image ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="Netflix" /> </Link>
      <Link to="About" className='navlink'> <img className='avathar-image ' alt='Avathar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' /> </Link>
    </navbar>

  )
}

export default NavBar
