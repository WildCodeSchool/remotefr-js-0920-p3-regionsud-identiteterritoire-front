import React from 'react';
import Administration from '../assets/Home_IconAuthorities.png';
import Environnement from '../assets/Home_IconEnvironment.png';
import Culture from '../assets/Home_IconCulture.png';
import Sports from '../assets/Home_IconSports.png';
import Formation from '../assets/Home_IconTraining.png';
import IconTheme from './IconTheme';

const Thematiques = () => {
  return (
    <section className='theme-container'>
      <div className='theme-title'>
        <div className='horizontal-line'></div>
        <h2 className='card-text category-title'>Thématiques</h2>
        <div className='horizontal-line'></div>
      </div>
      <div className='theme-icons-container'>
        <IconTheme src={Administration} alt='lorem ipsum' title='lorem ipsum' />
        <IconTheme src={Environnement} alt='lorem ipsum' title='lorem ipsum' />
        <IconTheme src={Culture} alt='lorem ipsum' title='lorem ipsum' />
        <IconTheme src={Formation} alt='lorem ipsum' title='lorem ipsum' />
        <IconTheme src={Sports} alt='lorem ipsum' title='lorem ipsum' />
      </div>
    </section>
  );
};

export default Thematiques;
