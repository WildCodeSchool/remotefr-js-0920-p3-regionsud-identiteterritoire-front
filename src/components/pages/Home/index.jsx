/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
/**
 * @class Header
 * @description Gere le haut du site
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="container">
        <div className="home col-md-12">
          {/* SEARCHBAR */}

          <div className="container-searchbar col-xs-12">
            <select className="form-select">
              <option selected>Changer de ville</option>
              <option value="1">Marseille</option>
              <option value="2">Toulon</option>
              <option value="3">Nice</option>
            </select>
            <select className="form-select">
              <option selected>Changer de personne</option>
              <option value="1">Marseille</option>
              <option value="2">Toulon</option>
              <option value="3">Nice</option>
            </select>
            <input type="date" value="2021-01-12" />
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-search" />
                </a>
              </li>
            </ul>
          </div>
          <h1>Home page</h1>
          <Link to="/commune/83000">Toulon</Link>
        </div>
        <div className="container-theme">
          <div className="text-theme">
            <p>Accès</p>
            <span>Rapide</span>
          </div>
          <div className="circle-theme">
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-heart" />
                </a>
              </li>
              <p>Social/Santé/Sport</p>
              <li>
                <a href="#">
                  <i className="fas fa-landmark" />
                </a>
              </li>
              <p>Musée</p>
              <li>
                <a href="#">
                  <i className="fas fa-leaf" />
                </a>
              </li>
              <p>Environnement</p>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}

export default Home;
