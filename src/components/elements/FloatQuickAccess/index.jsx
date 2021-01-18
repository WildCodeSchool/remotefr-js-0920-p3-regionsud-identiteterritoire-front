import React from 'react';
import './css/styles.css';
import PropTypes from 'prop-types';
/**
 * @class FloatQuickAccess
 * @description Menu lateral flotant
 */

const FloatQuickAccess = () => {
  return (
    <div className="container-theme">
      <div className="title-theme">
        <div>Accès</div>
        <div>Rapide</div>
      </div>
      <div>
        <BlockRoundIcon name="Social/Santé/Sport" link="#" icon="heart" />
        <BlockRoundIcon name="Musée" link="#" icon="landmark" />
        <BlockRoundIcon name="Environnement" link="#" icon="leaf" />
      </div>
    </div>
  );
};

const BlockRoundIcon = (props) => {
  const { name, link, icon } = props;
  return (
    <div className="BlockRoundIcon">
      <a href={link} className="buzz-out-on-hover">
        <i className={`fa fa-${icon} fa-2x circle-icon`} />
        <div>{name}</div>
      </a>
    </div>
  );
};

BlockRoundIcon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
};

export default FloatQuickAccess;
