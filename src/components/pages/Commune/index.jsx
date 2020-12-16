import React from 'react';
import PropTypes from 'prop-types';
import Culturo from '../../widgets/Culturo';
import Guide from '../../widgets/Guide';
/**
 * @class Header
 * @description Gere le haut du site
 */
class Commune extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { match } = this.props;
    return (
      <div>
        <h1>Toulon ({match.params.id})</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit
          corrupti assumenda quia nulla nemo, animi voluptatibus esse doloribus
          veniam laudantium, alias ab ducimus cupiditate non? Vitae impedit
          debitis rem?
        </p>
        <Guide />
        <Culturo />
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
