import React from 'react';
import logo from '../assets/download.png';
import '../styles/Navbar.css';

function NavBar() {
  return (
    <header>
      <img src={logo} alt="la liga logo" />
    </header>
  );
}

export default NavBar;
