import React from 'react';
import './Header.css';
import logoQuadri from '../../../assets/LOGO-2-QUADRI.jpg';
import logoWCS from '../../../assets/LOGO_WILDCODESCHOOL.png';
import headerBackground from '../../../assets/header.png';

const Header = () => {
  return (
    <header>
      <div className='header-logo'>
        <img className='logo-homepage' src={logoQuadri} alt='Logo Region Sud' />
        <div className='header-text'>
          <p>La data vous invite à :</p>
          <h1>découvrir notre région</h1>
        </div>
        <img className='logo-homepage' src={logoWCS} alt='Logo WCS' />
      </div>
      <div className='header'>
        <img
          className='header-background'
          src={headerBackground}
          alt='Paysage littoral'
        />
        <h2 className='city-title'>Toulon</h2>
        <nav className='homepage-nav'>
          <p>Choisir une ville</p>
          <p>Je suis...</p>
          <p>Choisir une date</p>
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
