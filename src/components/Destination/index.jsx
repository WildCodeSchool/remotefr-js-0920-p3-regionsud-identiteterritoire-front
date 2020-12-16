// eslint-disable react/prefer-stateless-function
// eslint-disable react/no-unescaped-entities
import React from 'react';
import './destination.css';

export default function Destination() {
  return (
    <div className="row">
      <div className="col-md-4">
        <img
          src="https://cdn-media.rtl.fr/cache/FK9y_F2KrJv76B7pwcilKg/880v587-0/online/image/2012/0704/7750350513_carte-de-localisation-de-toulon-var.jpg"
          className="img-fluid"
          alt="Responsive_imge"
        />
        <div className="text_1">
          <h4>
            Population: 166 700 <small>(2008)</small>
          </h4>

          <h4>Superficie: 42,84 km²</h4>
          <h4>Maire: Hubert Falco</h4>
        </div>
      </div>
      <div className="col-md-8">
        <h4 className="text-parag">
          Toulon est une commune du sud-Est de la France, chef-lieu du
          département du Var et siège de sa préfecture.
        </h4>
        <h4>
          Troisième ville de la région Provence-Alpes-Côte d'Azur derrière
          Marseille et Nice,elle abrite en outre le siège de la préfecture
          maritime de la Méditerranée.
        </h4>
        <h4>
          La commune est établie sur les bords de la mer Méditerranée, le long
          de la rade de Toulon. Ses habitants sont appelés les Toulonnais.
        </h4>
      </div>
    </div>
  );
}
