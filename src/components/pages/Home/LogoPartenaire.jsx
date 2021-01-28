import React from 'react';
import './css/style.css';
import apidae from './images/partenaires/LogoApidae.jpg';
import arsud from './images/partenaires/LogoArSud.jpg';
import datasud from './images/partenaires/LogoDataSud.jpg';
import mdlc from './images/partenaires/LogoMDLC.jpg';
import pnr from './images/partenaires/LogoPNR.jpg';

function LogoPartenaire() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="partenaire">
          <div className="title-partenaire text-center">
            <h6>
              Partenaires et/ou producteurs de données utilisées dans ce
              prototype
            </h6>
          </div>
          <div className="logo-partenaire">
            <a href="https://www.datasud.fr/" title="DataSud">
              <img src={datasud} className="img-partenaire" alt="DataSud" />
            </a>
            <a href="https://www.apidae-tourisme.com/" title="Apidae">
              <img src={apidae} className="img-partenaire" alt="Apidae" />
            </a>
            <a
              href="https://arsud-regionsud.com/"
              title="L'outil des Arts et du Spectable"
            >
              <img
                src={arsud}
                className="img-partenaire"
                alt="L'outil des Arts et du Spectable"
              />
            </a>
            <a
              href="https://www.parcs-naturels-regionaux.fr/"
              title="Parcs naturels régionaux de France"
            >
              <img
                src={pnr}
                className="img-partenaire"
                alt="Parcs naturels régionaux de France"
              />
            </a>
            <a
              href="https://www.culture.gouv.fr/"
              title="Ministère de la Culture"
            >
              <img
                src={mdlc}
                className="img-partenaire"
                alt="Ministère de la Culture"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoPartenaire;
