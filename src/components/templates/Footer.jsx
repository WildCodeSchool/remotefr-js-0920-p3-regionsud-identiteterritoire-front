import React from 'react';
import logoBlack from './images/logo-black.jpg';

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
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img src={logoBlack} alt="" className="center-content" />
            </div>
          </div>
        </div>
      </footer>
    );
  };
}
export default Footer;
