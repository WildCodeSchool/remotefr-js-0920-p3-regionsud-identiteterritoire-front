// eslint-disable react/prefer-stateless-function
// eslint-disable react/no-unescaped-entities
import React from 'react';
import './destination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

function Destination({
  population,
  anneeRecensement,
  superficie,
  name,
  anneereprise,
}) {
  return (
    <div className="row">
      <div className="col-md-8">
        <h1>
          Bienvenue à <b>Toulon</b>
        </h1>
        <p>
          <b>Site officiel:</b>
          <a href="https://www.toulon.fr"> https://www.toulon.fr</a>
        </p>

        <p className="text-parag">
          Toulon est une commune du sud-Est de la France, chef-lieu du
          département du Var et siège de sa préfecture. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Exercitationem, porro magni
          pariatur commodi debitis aperiam dolor eum repudiandae laborum
          reiciendis voluptates, maxime quod incidunt praesentium cupiditate
          distinctio quis laboriosam explicabo.
        </p>
        <p>
          Troisième ville de la région Provence-Alpes-Côte d&apos;Azur derrière
          Marseille et Nice,elle abrite en outre le siège de la préfecture
          maritime de la Méditerranée. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde qui quasi doloremque recusandae, inventore modi
          mollitia aspernatur, architecto impedit aperiam voluptatum doloribus.
          Accusamus eum debitis possimus quos asperiores placeat est.
        </p>
        <p>
          La commune est établie sur les bords de la mer Méditerranée, le long
          de la rade de Toulon. Ses habitants sont appelés les Toulonnais.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          adipisci ut facere, inventore consectetur laboriosam eum expedita!
          Sunt et, soluta praesentium vitae at dignissimos mollitia molestias
          sapiente quisquam quibusdam nihil!
        </p>
        <div className="row">
          <div className="col-md-4 text_1">
            <h4>
              <b>Population: {population}</b>
            </h4>
            <div className="anneeRecensement">
              <small>{anneeRecensement}</small>
            </div>
          </div>
          <div className="col-md-4 text_1">
            <h4>
              <b>Superficie: {superficie}</b>
            </h4>
            <div className="km">
              <small>Km²</small>
            </div>
          </div>
          <div className="col-md-4 text_1">
            <h4>
              <b>Maire: {name}</b>
            </h4>
            <div className="anneereprise">
              <small>{anneereprise}</small>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="social-container">
              <h3 className="social-follow">Réseaux sociaux</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com" className="twitter social">
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
        <h2>
          <b>19.0°</b> <small>Vent:NO 27Km/h</small>
        </h2>
        <div className="row">
          <div className="col-md-12 bg-color">
            <h4>
              <b>Office de Tourisme</b>
            </h4>
            <p>Provence Méditerranée</p>
            <p>
              <b>Bureau de Toulon</b>
              <br />
              12,place Louis Blanc <br />
              83000 Toulon <br />
              Tel: +33 4 94 18 53 00 <br />
              E-mai:info@toulontourisme.com
            </p>
            <p>
              Horaires (Toute l&apos;année) <br />
              Lundi: 9h à 13h et de 14h à 18h <br />
              Mardi: <b>10h</b> à 13h et de 14h à 18h <br />
              Mercredi: 9h à 13h et de 14h à 18h
              <br />
              Jeudi: 9h à 13h et de 14h à 18h <br />
              Vendredi: 9h à 13h et de 14h à 18h
              <br />
              Samedi: 9h à 13h et de 14h à 18h
              <br /> Dimanche: fermer
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 containerImg">
            <img
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/b/bc/Villes_Internet.jpg/220px-Villes_Internet.jpg"
              className="img-fluid"
              alt="Responsive_imge"
            />
            <img
              src="http://pro.visitparisregion.com/var/crt_idf/storage/images/media/crt-images/optimisation-de-vos-prestations/labels-et-reseaux/vvf2/logo-villes-et-villages-fleuris-2019/831511-1-fre-FR/Logo-Villes-et-villages-fleuris-2019_diaporama.jpg"
              className="img-fluid"
              alt="Responsive_imge"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
Destination.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  anneeRecensement: PropTypes.number.isRequired,
  superficie: PropTypes.number.isRequired,
  anneereprise: PropTypes.number.isRequired,
};
export default Destination;
