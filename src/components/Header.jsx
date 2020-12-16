import React from 'react';
import './Header.css';
import logoQuadri from '../assets/LOGO-2-QUADRI.jpg';

const Header = () => {
  return (
    <header>
      <div className='header-logo'>
        <img className='logo-homepage' src={logoQuadri} alt='Logo Region Sud' />
      </div>
      <div className='header'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quam unde
        suscipit ea molestias eligendi voluptates totam blanditiis illo cum?
      </div>
      <nav>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        repellendus modi illo, labore quae ex?
      </nav>
    </header>
  );
};

export default Header;
