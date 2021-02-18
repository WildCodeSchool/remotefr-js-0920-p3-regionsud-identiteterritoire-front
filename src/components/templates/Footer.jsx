/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logoBlack from './images/logo-black.jpg';
import YouTube from './images/002-youtube.png';
import Facebook from './images/043-facebook-1.png';
import Instagram from './images/034-instagram.png';
import LinkedIn from './images/031-linkedin.png';
import Twitter from './images/013-twitter-1.png';
import BorderTitle from './images/border-title.jpg';

/**
 * @class Footer
 * @description Gere le bas du site
 */

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <footer>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <img
                src={BorderTitle}
                alt="Border Title"
                title="Border Title"
                className="border-title"
              />
              <h5 className="title-footer">Presse</h5>
              <button type="button" className="btn-footer">
                Contact Presse
              </button>
            </div>
            <div className="col-md-4">
              <img
                src={BorderTitle}
                alt="Border Title"
                title="Border Title"
                className="border-title"
              />
              <h5 className="title-footer">Newsletter</h5>
              <button type="button" className="btn-footer">
                Abonnez-vous
              </button>
            </div>
            <div className="col-md-4">
              <img
                src={BorderTitle}
                alt="Border Title"
                title="Border Title"
                className="social-border-title"
              />
              <h5 className="connect-social-title">Restons Connectés</h5>

              {/* Icônes Reseaux Sociaux */}

              <img
                src={Facebook}
                alt="Facebook"
                title="Facebook"
                className="icon-social"
              />
              <img
                src={Twitter}
                alt="Twitter"
                title="Twitter"
                className="icon-social"
              />
              <img
                src={YouTube}
                alt="YouTube"
                title="YouTube"
                className="icon-social"
              />
              <img
                src={LinkedIn}
                alt="LinkedIn"
                title="LinkedIn"
                className="icon-social"
              />
              <img
                src={Instagram}
                alt="Instagram"
                title="Instagram"
                className="icon-social"
              />
            </div>
            <div className="col-md-12 text-center">
              <div className="top-border">
                <img src={logoBlack} alt="" className="center-content" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="adress">
                <h5 className="title-footer">Région Sud</h5>
                <h5 className="title-footer">Provence-Alpes-Côte-d'Azur</h5>
                <h6>Hôtel de Région</h6>
                <p>27, place Jules Guesde</p>
                <p>13481 Marseille Cedex 20</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="horaire">
                <h5 className="title-footer-horaire">Du lundi au vendredi</h5>
                <p>De 9h à 17h sans interruption</p>
                <p>04 91 57 50 57</p>
                <button type="button" className="btn-footer-contact">
                  Contacter la Région
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="liens-utiles">
                <h5 className="title-footer">Liens utiles</h5>
                <Link
                  to="/info#Dev"
                  alt="Équipe en charge du développement"
                  title="Équipe en charge du développement"
                >
                  Équipe en charge du développement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
}
export default Footer;
