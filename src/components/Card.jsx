import React from 'react';

const Card = (props) => {
  return (
    <div className='card-container'>
      <h3 className='card-title'>{props.text}</h3>
      <p className='card-text'>{props.paragraphe}</p>
      <img className='card-img' src={props.src} alt='Thématique' />
    </div>
  );
};

export default Card;
