import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

export const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <header id="navbar">
      <nav className="navbar-container container-nav">
          <a href="/" className="home-link">
          <div className="navbar-logo">
            <img src={logo} alt="Home" className='img-logo' />
          </div>
          Pokemon List
          </a>
          
      </nav>
    </header>
  )
}
