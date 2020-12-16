import React from 'react';
import './Header.css';
import logoQuadri from '../assets/LOGO-2-QUADRI.jpg';
import headerBackground from '../assets/header.png';

const Header = () => {
  return (
    <header>
      <div className='header-logo'>
        <img className='logo-homepage' src={logoQuadri} alt='Logo Region Sud' />
      </div>
      <div className='header'>
        <img
          className='header-background'
          src={headerBackground}
          alt='Paysage littoral'
        />
        <p></p>
      </div>
      <nav>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        repellendus modi illo, labore quae ex?
      </nav>
    </header>
  );
};

export default Header;
