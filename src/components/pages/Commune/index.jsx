import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import InfoCommune from '../../widgets/InfoCommune';
import MapCommune from '../../widgets/MapCommune';
import SliderTop from '../../elements/SliderTop';
import Patrimoine from '../../Patrimoine';
import FloatQuickAccess from '../../elements/FloatQuickAccess';

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
        const commune = res.data;
        this.setState({ commune });
      });

    axios
      .get(`https://regionsud-api-dev.woozy.fr/api/communes/${id}/mairie`)
      .then((res) => {
        const mairie = res.data;
        this.setState({ mairie });
      });

    axios
      .get(`https://regionsud-api-dev.woozy.fr/api/communes/${id}/maire`)
      .then((res) => {
        const maire = res.data;
        this.setState({ maire });
      });

    axios
      .get(`https://regionsud-api-dev.woozy.fr/api/communes/${id}/geocommunes`)
      .then((res) => {
        const geocommune = res.data;
        this.setState({ geocommune });
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

       <Patrimoine />
        <Evenements />
        <MapCommune
          commune={commune}
          codeInsee={commune.code_insee}
          geocommune={geocommune}
        />

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
