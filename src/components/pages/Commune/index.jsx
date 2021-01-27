import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// Import Elements
import SliderTop from '../../elements/SliderTop';
import FloatQuickAccess from '../../elements/FloatQuickAccess';

// Import Widgets
import GalleryCommune from '../../widgets/GalleryCommune';
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
      .get(`https://regionsud-api-dev.woozy.fr/api/communes/${id}`)
      .then((res) => {
        this.setState({ commune: res.data });
      });

    axios
      .get(`https://regionsud-api-dev.woozy.fr/api/communes/${id}/mairie`)
      .then((res) => {
        this.setState({ mairie: res.data });
      });

    axios
      .get(`https://regionsud-api-dev.woozy.fr/api/communes/${id}/maire`)
      .then((res) => {
        this.setState({ maire: res.data });
      });

    axios
      .get(`https://regionsud-api-dev.woozy.fr/api/communes/${id}/geocommunes`)
      .then((res) => {
        this.setState({ geocommune: res.data });
      });

    axios
      .get(`https://regionsud-api-dev.woozy.fr/api/communes/${id}/slider`)
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
        <FloatQuickAccess />
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
        <GalleryCommune />
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
