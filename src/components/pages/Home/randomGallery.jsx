import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/**
 * @class MapCommune
 * @description Map de la page commune
 */
//
function RandomCommuneBottom() {
  const [gallery, setGallery] = useState([]);
  /**
   *
   * @description recupere la liste des activité & possible
   */
  useEffect(() => {
    if (!gallery.length) {
      axios
        .get(`https://regionsud-api-dev.woozy.fr/api/communes/gallery/random`)
        .then((res) => {
          setGallery(res.data);
        });
    }
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="mediumTitle">Photos aléatoire</div>
        <div className="row">
          <div className="col-md-12">
            <div className="gal">
              {gallery.map(function rg(picture) {
                return (
                  <Link to={`/commune/${picture.code_insee}`}>
                    <img src={picture.urlDiaporama} alt="" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomCommuneBottom;
