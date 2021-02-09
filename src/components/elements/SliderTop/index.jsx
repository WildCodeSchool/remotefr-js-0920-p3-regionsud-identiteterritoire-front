import React from 'react';

import './css/styles.css';
import PropTypes from 'prop-types';

import SearchBar from '../SearchBar';
/**
 * @class SliderTop
 * @description Gestion des slider
 */

const SliderTop = (props) => {
  const { pictures } = props;

  let pictureSlider = '/images/sliders/communes/toulon.jpg';
  if (pictures.startsWith('http')) {
    pictureSlider = pictures;
  } else {
    pictureSlider = `/images/sliders/${pictures}`;
  }

  return (
    <div className="row slider-container">
      <div
        className="col-md-12 slider p-0"
        style={{
          backgroundImage: `url(${pictureSlider})`,
        }}
      >
        <SearchBar />
      </div>
    </div>
  );
};

SliderTop.propTypes = {
  pictures: PropTypes.string.isRequired,
};

export default SliderTop;
