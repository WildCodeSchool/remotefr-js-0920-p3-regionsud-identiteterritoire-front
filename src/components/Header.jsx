import React from 'react';
import './Header.css';
import logoQuadri from '../assets/LOGO-2-QUADRI.jpg';
import logoWCS from '../assets/Home_LogoWCS.png';
import headerBackground from '../assets/header.png';

const Header = () => {
  return (
    <header>
      <div className='header-logo'>
        <img className='logo-homepage' src={logoQuadri} alt='Logo Region Sud' />
        <img className='logo-homepage' src={logoWCS} alt='Logo Region Sud' />
      </div>
      <div className='header'>
        <img
          className='header-background'
          src={headerBackground}
          alt='Paysage littoral'
        />
        <nav className='homepage-nav'>
          <p>Je souhaite découvrir une destination de mon choix </p>
          <button type='submit' className='calendar-btn'>
            <span role='img' aria-label='emoji' id='emoji'>
              ⛛
            </span>
          </button>
          <p> à partir du xx:xx:xx</p>
          <button type='submit' className='calendar-btn'>
            <span role='img' aria-label='emoji' id='emoji'>
              📅
            </span>
          </button>
          <button type='submit' className='search-btn'>
            <span role='img' aria-label='emoji' id='emoji'>
              🔍
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
