import React from 'react';
import IconTheme from './IconTheme';

const Thematiques = () => {
  return (
    <section className='theme-container'>
      <h2>Thématiques</h2>
      <div>{/* Ligne droite */}</div>
      <div className='theme-icons-container'>
        <IconTheme
          src='https://via.placeholder.com/32'
          alt='lorem ipsum'
          title='lorem ipsum'
        />
        <IconTheme
          src='https://via.placeholder.com/32'
          alt='lorem ipsum'
          title='lorem ipsum'
        />
        <IconTheme
          src='https://via.placeholder.com/32'
          alt='lorem ipsum'
          title='lorem ipsum'
        />
        <IconTheme
          src='https://via.placeholder.com/32'
          alt='lorem ipsum'
          title='lorem ipsum'
        />
        <IconTheme
          src='https://via.placeholder.com/32'
          alt='lorem ipsum'
          title='lorem ipsum'
        />
      </div>
    </section>
  );
};

export default Thematiques;
