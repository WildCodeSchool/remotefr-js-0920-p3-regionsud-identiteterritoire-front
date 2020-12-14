import React from 'react';
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
    return <header className="container">Header</header>;
  };
}

export default Header;
