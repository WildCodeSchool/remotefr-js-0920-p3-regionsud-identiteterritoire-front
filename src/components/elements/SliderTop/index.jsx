import React from 'react';
import React, { useState, useEffect } from 'react';
import './css/styles.css';
import PropTypes from 'prop-types';
import SelectPersonas from './SelectPersonas';
import DatePicker from './DatePicker';
import SelectTown from './SelectTown';
/**
 * @class SliderTop
 * @description Gestion des slider
 */


const SliderTop = (props) => {
  const { pictures } = props;
  const [isSubmitted, setIsSubmitted] = useState([]);
  let pictureSlider = '/images/sliders/communes/toulon.jpg';
  if (pictures.startsWith('http')) {
    pictureSlider = pictures;
  } else {
    pictureSlider = `/images/sliders/${pictures}`;
  }

      
  handleSubmit = (event) => {
    setIsSubmitted(!isSubmitted);
    event.preventDefault();
    return 'Le choix a bien été soumis';
  };

      
      
  return (
    <div className="row slider-container">
      <div
        className="col-md-12 slider p-0"
        style={{
          backgroundImage: `url(${pictureSlider})`,
        }}
      >
        <div className="row justify-content-center align-self-center h100">
          <div className="vertical-center">
            <div className="roundedFormsHome">
              <SelectTown />
              <SelectPersonas />
              <DatePicker />
                <button
                  type="submit"
                  onSubmit={this.handleSubmit}
                  className="dot"
                >
                  <i className="fas fa-search search-icon" />{' '}
                </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

SliderTop.propTypes = {
  pictures: PropTypes.string.isRequired,
};

export default SliderTop;
