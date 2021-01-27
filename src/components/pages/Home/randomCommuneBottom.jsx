import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
/**
 * @class MapCommune
 * @description Map de la page commune
 */
//
function RandomCommuneBottom() {
  const [communes, setCommunes] = useState([]);
  /**
   *
   * @description recupere la liste des activité & possible
   */
  useEffect(() => {
    if (!communes.length) {
      axios
        .get(`https://regionsud-api-dev.woozy.fr/api/communes/random?limit=30`)
        .then((res) => {
          setCommunes(res.data);
        });
    }
  }, [communes]);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="bigTitle">Découverte aléatoire</div>
        <div>
          {communes.map(function c(commune) {
            return (
              <Link
                className="badge badge-secondary badge-random-home"
                key={commune.nom}
                to={`/commune/${commune.code_insee}/${commune.slug}`}
              >
                {commune.nom}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RandomCommuneBottom;
