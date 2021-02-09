import React from 'react';
import './css/styles.css';
import { Link, useParams } from 'react-router-dom';

/**
 * @class FloatRaw
 * @description Menu lateral flotant pour les data
 */

const FloatRaw = () => {
  const { id } = useParams();
  return (
    <div className="container-theme">
      <div className="title-theme">
        <div>En</div>
        <div>Data</div>
      </div>
      <div className="theme-icons">
        <div className="BlockRoundIcon">
          <Link to={`/commune/${id}/raw`} className="buzz-out-on-hover">
            <i className="fa fa-cog fa-2x circle-icon" />
            <div>Sources</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatRaw;
