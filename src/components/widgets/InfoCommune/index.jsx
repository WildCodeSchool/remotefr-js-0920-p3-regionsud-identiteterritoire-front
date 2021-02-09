import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './css/styles.css';
import ReactHtmlParser from 'react-html-parser';
import imagesLogoVilleInternet from './images/logo-villes-internet-1.jpg';
import Weather from './Weather';
import SociaLink from './SociaLink';
import RadarCommune from '../../elements/Charts/RadarCommune';
import imageLogoVillageFlories from './images/Logo-Villes-et-villages-fleuris-2019_diaporama.jpg';

/**
 * @class InfoCommune
 * @description Map en bas de la home
 */

const InfoCommune = (props) => {
  const { commune, mairie } = props;
  useEffect(() => {
    // axios
    //   .get(`${process.env.REACT_APP_REGIONSUD_API_URL}/communes/tourismes/radar`)
    //   .then((res) => {
    //   });
  }, []);

  return (
    <div className="col-md-10 offset-md-1">
      <div className="row">
        <div className="col-md-6">
          <div className="align-baseline1">
            <div className="communeWelcome">Nos data sur</div>
            <div className="communeTitle">{commune.nom}</div>
          </div>
          <p>
            <b>Site officiel: </b>
            <a href="{mairie.www}" target="_blank">
              {` ${mairie.www}`}
            </a>
          </p>
          <p>{ReactHtmlParser(commune.text)}</p>
          <div className="row">
            <div className="col-md-6">
              <Weather codeInsee={commune.code_insee} />
            </div>
            <div className="col-md-6">
              <SociaLink />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <RadarCommune />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center villageIcons">
              <img
                src={imagesLogoVilleInternet}
                className="img-rate-quality-picto"
                alt="Responsive_imge"
              />
            </div>
            <div className="col-md-6 text-center villageIcons">
              <img
                src={imageLogoVillageFlories}
                className="img-rate-quality-picto"
                alt="Responsive_imge"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr className="orange-bar" />
        </div>
      </div>
    </div>
  );
};

InfoCommune.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,

  commune: PropTypes.shape({
    code_insee: PropTypes.string.isRequired,
    code_postal: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired,
    population: PropTypes.string,
    slug: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,

  maire: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    code_insee: PropTypes.string.isRequired,
  }).isRequired,

  mairie: PropTypes.shape({
    id: PropTypes.number,
    code_insee: PropTypes.string,
    nom: PropTypes.string,
    adresse: PropTypes.string,
    code_postal: PropTypes.string,
    telephone: PropTypes.string,
    www: PropTypes.string,
    email: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
  }).isRequired,

  geocommune: PropTypes.shape({
    id: PropTypes.number.isRequired,
    code_insee: PropTypes.string,
    altitude: PropTypes.string,
    superficie: PropTypes.string,
    population: PropTypes.string,
    longitude: PropTypes.string,
    latitude: PropTypes.string,
    geo_shape: PropTypes.string,
  }).isRequired,
};

export default withRouter(InfoCommune);
