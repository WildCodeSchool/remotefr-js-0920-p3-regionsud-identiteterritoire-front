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

export default function Destination(props) {
  const {
    population,
    anneeRecensement,
    superficie,
    name,
    anneereprise,
  } = props;
  return (
    <div className="row">
      <div className="col-md-4">
        <img
          src="https://cdn.worldvectorlogo.com/logos/ville-de-toulon.svg"
          className="img-fluid"
          alt="Responsive_imge"
        />
      </div>
      <div className="col-md-4">
        <h1>Bienvenue à Toulon</h1>
        <p className="text-parag">
          Toulon est une commune du sud-Est de la France, chef-lieu du
          département du Var et siège de sa préfecture.
        </p>
        <p>
          Troisième ville de la région Provence-Alpes-Côte d&apos;Azur derrière
          Marseille et Nice,elle abrite en outre le siège de la préfecture
          maritime de la Méditerranée.
        </p>
        <p>
          La commune est établie sur les bords de la mer Méditerranée, le long
          de la rade de Toulon. Ses habitants sont appelés les Toulonnais.
        </p>
        <div className="text_1">
          <h4>Population: {population}</h4>
          <small>{anneeRecensement}</small>

          <h4>Superficie: {superficie}</h4>
          <p>Km²</p>
          <h4>Maire: {name}</h4>
          <small>{anneereprise}</small>
        </div>
      </div>
      <div className="col-sm-4">
        <img
          src="https://toulontourisme.com/wp-content/uploads/2018/06/4285403.jpg"
          className="img-fluid"
          alt="Responsive_imge"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eos
          nobis optio necessitatibus aspernatur velit incidunt quam, officiis
          deleniti sit consectetur quod autem quia molestias, sunt dicta eveniet
          omnis possimus.
        </p>
      </div>
      <div className="social-container">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="social-follow">Social Follow</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.twitter.com" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.instagram.com" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
