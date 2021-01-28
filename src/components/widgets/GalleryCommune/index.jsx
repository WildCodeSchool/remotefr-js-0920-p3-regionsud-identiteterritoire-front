import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './css/styles.css';
import LogoPartenaire from '../../pages/Home/LogoPartenaire';
/**
 * @class MapCommune
 * @description Map de la page commune
 */
//
function GalleryCommune(props) {
  const [gallery, setGallery] = useState([]);
  /**
   *
   * @description recupere la liste des activité & possible
   */
  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;
    if (!gallery.length) {
      axios
        .get(
          `https://regionsud-api-dev.woozy.fr/api/communes/${id}/gallery?limit=18`,
        )
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
            <div className="gal-commune">
              {gallery.map(function rg(picture) {
                return <img src={picture.urlDiaporama} alt="" />;
              })}
            </div>
            <LogoPartenaire />
          </div>
        </div>
      </div>
    </div>
  );
}
GalleryCommune.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
export default withRouter(GalleryCommune);
