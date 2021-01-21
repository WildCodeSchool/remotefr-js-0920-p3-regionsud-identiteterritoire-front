import React from 'react';
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
