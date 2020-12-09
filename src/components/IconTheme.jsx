import React from 'react';

const IconTheme = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.title} />
      <p>{props.text}</p>
    </div>
  );
};

export default IconTheme;
