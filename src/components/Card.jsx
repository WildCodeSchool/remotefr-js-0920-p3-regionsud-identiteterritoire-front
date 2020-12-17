import React from 'react';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img className='card-img' src={props.src} alt='Thématique' />

      <h2 className='card-text'>{props.text}</h2>
    </div>
  );
};

export default Card;
