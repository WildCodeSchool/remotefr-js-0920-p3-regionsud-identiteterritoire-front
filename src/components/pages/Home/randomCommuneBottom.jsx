import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/style.css';
import { Link } from 'react-router-dom';
/**
 * @class RandomCommuneBottom
 * @description Rajoute un nuage de tags de commune en bas du site
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
        .get(`https://regionsud-api-dev.woozy.fr/api/communes/random?limit=80`)
        .then((res) => {
          setCommunes(res.data);
        });
    }
  }, [communes]);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="mediumTitle">Découverte aléatoire</div>
        <div>
          {communes.map(function c(commune) {
            const classIt = [
              'badge-regionsud-200',
              'badge-regionsud-400',
              'badge-regionsud-600',
            ];
            const random = Math.floor(Math.random() * classIt.length);
            return (
              <Link
                className={`badge ${classIt[random]} badge-random-home`}
                key={commune.nom}
                to={`/commune/${commune.code_insee}`}
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
