import React from 'react';
import { Link } from 'react-router-dom';
import logoWildCodeSchool from './images/logo-wild-code-school.png';
import logoRegionSud from './images/logo.jpg';
/**
 * @class Header
 * @description Gere le haut du site
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <div className="container bg-white">
        <div className="row">
          <div className="col-md-2">
            <Link to="/" className="home-title-city">
              <img src={logoRegionSud} alt="" className="img-fluid" />
            </Link>
          </div>
          <div className="col-md-8">
            <div align="center">
              <div className="headerpunchlineslim">La data vous invite à</div>
              <div className="headerpunchlineBig">découvrir notre région</div>
            </div>
          </div>
          <div className="col-md-2">
            <img
              src={logoWildCodeSchool}
              alt=""
              className="img-fluid logoWildCodeSchool"
            />
          </div>
        </div>
      </div>
    );
  };
}

export default Header;
