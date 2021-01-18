import React from 'react';
import InfoCommune from '../../widgets/InfoCommune';
import MapCommune from '../../widgets/MapCommune';
import SliderTop from '../../elements/SliderTop';

/**
 * @class Commune
 * @description Gere le haut du site
 */
class Commune extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div>
        <SliderTop pictures="communes/toulon.jpg" />
        <InfoCommune />
        <MapCommune />
      </div>
    );
  };
}

export default Commune;
