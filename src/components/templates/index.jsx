import React from 'react';
import { Link } from 'react-router-dom';
import './css/styles.css';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

/**
 * @class Templates
 * @description fusionne le haut et le bas du site
 */

class Templates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { children } = this.props;
    return (
      <div className="Global">
        <div className="BarPresentation">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                Présentaton du projet en partenariat avec la Wild Code School.{' '}
                <Link to="/info">En savoir plus.</Link>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <main className="container bg-white">{children}</main>
        <Footer />
      </div>
    );
  };
}
Templates.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Templates;
