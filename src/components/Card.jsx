import React from 'react';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img className='card-img' src={props.src} alt='Thématique' />

      <p className='card-text'>{props.text}</p>
    </div>
  );
};

export default Card;
