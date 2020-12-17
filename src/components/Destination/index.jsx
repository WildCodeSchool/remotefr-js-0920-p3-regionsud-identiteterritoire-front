// eslint-disable react/prefer-stateless-function
// eslint-disable react/no-unescaped-entities
import React from 'react';
import './destination.css';

export default function Destination(props) {
  const { population, anneeRecensement, superficie, name } = props;
  return (
    <div className="row">
      <div className="col-md-4">
        <img
          src="https://map.viamichelin.com/map/carte?map=viamichelin&z=10&lat=43.12519&lon=5.93104&width=550&height=382&format=png&version=latest&layer=background&debug_pattern=.*"
          className="img-fluid"
          alt="Responsive_imge"
        />
        <div className="text_1">
          <h4>
            Population: {population}
            <small>({anneeRecensement})</small>
          </h4>
          <h4>Superficie: {superficie}</h4>
          <h4>Maire: {name}</h4>
        </div>
      </div>

      <div className="col-md-8">
        <h4 className="text-parag">
          Toulon est une commune du sud-Est de la France, chef-lieu du
          département du Var et siège de sa préfecture.
        </h4>
        <h4>
          Troisième ville de la région Provence-Alpes-Côte d&apos;Azur derrière
          Marseille et Nice,elle abrite en outre le siège de la préfecture
          maritime de la Méditerranée.
        </h4>
        <h4>
          La commune est établie sur les bords de la mer Méditerranée, le long
          de la rade de Toulon. Ses habitants sont appelés les Toulonnais.
        </h4>
      </div>
      <hr className="col-md-11" />
    </div>
  );
}
