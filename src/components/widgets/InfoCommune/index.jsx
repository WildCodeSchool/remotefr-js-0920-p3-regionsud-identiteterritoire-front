import React from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import './css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { FaExpandAlt, FaUserTie, FaUsers } from 'react-icons/fa';
import imagesLogoVilleInternet from './images/logo-villes-internet-1.jpg';
import Weather from './Weather';
import imageLogoVillageFlories from './images/Logo-Villes-et-villages-fleuris-2019_diaporama.jpg';

/**
 * @class InfoCommune
 * @description Map en bas de la home
 */
class InfoCommune extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { commune, geocommune, maire, mairie } = this.props;

    return (
      <div className="col-md-10 offset-md-1">
        <div className="row">
          <div className="col-md-8">
            <h1 className="align-baseline1">
              Bienvenue à <b>{commune.nom}</b>
            </h1>
            <p>
              <b>Site officiel: </b>
              <a href="{mairie.www}" target="_blank">
                {` ${mairie.www}`}
              </a>
            </p>
            <p>
              <b>
                $VILLE est un(e) $TYPEDECOMMUNE située dans le département $
                DEPARTEMENT.
              </b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quasi, quod maiores, sequi maxime itaque magnam excepturi
              voluptate autem esse repellat saepe est quaerat cumque fugit ex ad
              aliquam qui?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quasi, quod maiores, sequi maxime itaque magnam excepturi
              voluptate autem esse repellat saepe est quaerat cumque fugit ex ad
              aliquam qui?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quasi, quod maiores, sequi maxime itaque magnam excepturi
              voluptate autem esse repellat saepe est quaerat cumque fugit ex ad
              aliquam qui?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quasi, quod maiores, sequi maxime itaque magnam excepturi
              voluptate autem esse repellat saepe est quaerat cumque fugit ex ad
              aliquam qui?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quasi, quod maiores, sequi maxime itaque magnam excepturi
              voluptate autem esse repellat saepe est quaerat cumque fugit ex ad
              aliquam qui?
              <br />
            </p>

            <div className="row">
              <div className="col-md-4 text_1">
                <h5 className="align-baseline">
                  <b>
                    <FaUsers />
                    {geocommune.population}
                  </b>
                </h5>
                <div className="gbright-color align-baseline miniInfo">
                  2012
                </div>
              </div>

              <div className="col-md-4 text_1">
                <h5 className="align-baseline">
                  <b>
                    <FaExpandAlt />
                    {geocommune.superficie / 100} km²
                  </b>
                </h5>
                <div className="gbright-color align-baseline miniInfo">
                  {' '}
                  Km²
                </div>
              </div>
              <div className="col-md-4 text_1">
                <h5 className="align-baseline">
                  <b>
                    <FaUserTie />
                    {maire.nom} {maire.prenom}
                  </b>
                </h5>

                <div className="gbright-color miniInfo ">Maire de la ville</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="social-container">
                  <h4 className="social-follow">Réseaux sociaux</h4>
                  <div className="social-icons">
                    <a
                      href="https://www.facebook.com"
                      className="facebook social"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      className="twitter social"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      className="instagram social"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Weather codeInsee={commune.code_insee} />
            <div className="row">
              <div className="col-md-12">
                <div className="bg-grey-light padding-grey-block">
                  <h4>
                    <b className="red-color align-text officeTourismeTitle">
                      Office de Tourisme
                    </b>
                  </h4>
                  <p className="gbright-color align-text Provence">
                    <b>Provence Méditerranée</b>
                  </p>
                  <p className="align-text bureau">
                    <b>Bureau de Toulon</b>
                    <br />
                    12,place Louis Blanc <br />
                    83000 Toulon <br />
                    Tel: +33 4 94 18 53 00 <br />
                    E-mai:info@toulontourisme.com
                  </p>
                  <p className="align-text">
                    Horaires (Toute l&apos;année) <br />
                    Lundi: 9h à 13h et de 14h à 18h <br />
                    Mardi: <b>10h</b> à 13h et de 14h à 18h <br />
                    Mercredi: 9h à 13h et de 14h à 18h
                    <br />
                    Jeudi: 9h à 13h et de 14h à 18h <br />
                    Vendredi: 9h à 13h et de 14h à 18h
                    <br />
                    Samedi: 9h à 13h et de 14h à 18h
                    <br /> Dimanche: <b className="red-color">Fermé</b>
                  </p>
                </div>
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
  }
}

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
