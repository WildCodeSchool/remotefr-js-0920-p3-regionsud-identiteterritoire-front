import React from 'react';
import officeTourism from './images/office_tourisme.jpg';
import './css/style.css';
/**
 * @class Header
 * @description Gere le haut du site
 */
class Guide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officeToulon: {
        name: 'Office de Tourisme Provence Méditerranée - Bureau de Toulon',
        address: '12, place Louis Blanc 83000',
        phone: '+33 4 94 18 53 00',
        mail: 'info@toulontourisme.com',
        open:
          "Toute l'année : Ouvert de 9h à 13h et de 14h à 18h du lundi au samedi (sauf mardi à partir de 10h)",
      },
    };
  }

  render = () => {
    const {
      officeToulon: { name, address, phone, mail, open },
    } = this.state;

    return (
      <div className="container">
        <div className="guide-image">
          <img
            src={officeTourism}
            alt="Office du Tourisme"
            title="Office du Tourisme"
          />
        </div>
        <div className="guide-text">
          <h2>Se faire accompagner</h2>
          <p>{name}</p>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{mail}</p>
          <p>{open}</p>
          <a href="https://toulontourisme.com">https://toulontourisme.com</a>
        </div>
      </div>
    );
  };
}

export default Guide;
