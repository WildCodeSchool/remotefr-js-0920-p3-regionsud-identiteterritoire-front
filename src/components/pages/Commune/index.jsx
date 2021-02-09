import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// Import Elements
import SliderTop from '../../elements/SliderTop';
import FloatRaw from '../../elements/FloatQuickAccess/FloatRaw';

// Import Widgets

import Patrimoine from '../../widgets/Patrimoine';
import Evenements from '../../widgets/Evenements';
import InfoCommune from '../../widgets/InfoCommune';
import MapCommune from '../../widgets/MapCommune';

/**
 * @class Commune
 * @description Gere le haut du site
 */

class Commune extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commune: [],
      mairie: [],
      maire: [],
      geocommune: [],
      sliderImage: '',
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    axios
      .get(`${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}`)
      .then((res) => {
        this.setState({ commune: res.data });
      });

    axios
      .get(`${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/mairie`)
      .then((res) => {
        this.setState({ mairie: res.data });
      });

    axios
      .get(`${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/maire`)
      .then((res) => {
        this.setState({ maire: res.data });
      });

    axios
      .get(
        `${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/geocommunes`,
      )
      .then((res) => {
        this.setState({ geocommune: res.data });
      });

    axios
      .get(`${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/slider`)
      .then((res) => {
        const slider = res.data;
        this.setState({ sliderImage: slider.urlDiaporama });
      });
  }

  render = () => {
    const { commune, geocommune, maire, mairie, sliderImage } = this.state;
    return (
      <div>
        <SliderTop pictures={sliderImage} />
        <FloatRaw />

        <InfoCommune
          commune={commune}
          geocommune={geocommune}
          maire={maire}
          mairie={mairie}
        />
        <Evenements />
        <div className="row">
          <div className="col-md-12">
            <hr className="orange-bar" />
          </div>
        </div>
        <Patrimoine />
        <MapCommune commune={commune} geocommune={geocommune} />
      </div>
    );
  };
}

Commune.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Commune;
