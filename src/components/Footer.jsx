import React from 'react';
import './Footer.css';
import logoBlack from '../assets/LOGO-2-TRAIT-BLANC.png';

const Footer = () => {
  return (
    <footer>
      <img className='logo-footer' src={logoBlack} alt='Logo Région Sud' />
      <div className='contact'>
        <ul>
          <h3>
            REGION SUD <br /> PROVENCE-ALPES-CÔTE D'AZUR
          </h3>
          <h4>Hôtel de Région</h4>
          <li>27, place Jules Guesde</li>
          <li>13481 Marseille Cedex 20</li>
        </ul>
        <ul>
          <h4>Du lundi au vendredi</h4>
          <li>De 9h à 17h sans interruption</li>
          <li>04 91 57 50 57</li>
          <button type='button' className='contact-btn'>
            Contacter la région
          </button>
        </ul>
        <ul>
          <h4>Liens utiles</h4>
          <li>Subventions régionales</li>
          <li>Sud Marchés Publics</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
