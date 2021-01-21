import React from 'react';
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
  const pictureSlider = `/images/sliders/${pictures}`;
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
              <span className="dot">
                <i className="fas fa-search search-icon" />{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderTop.propTypes = {
  pictures: PropTypes.string.isRequired,
};

export default SliderTop;
