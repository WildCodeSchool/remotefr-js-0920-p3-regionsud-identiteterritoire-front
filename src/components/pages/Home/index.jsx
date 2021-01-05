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
                  <i className="fas fa-home" />
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
