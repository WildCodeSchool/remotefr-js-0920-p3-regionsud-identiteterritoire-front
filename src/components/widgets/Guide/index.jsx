/* eslint-disable jsx-a11y/anchor-is-valid */
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
      <div className="row">
        <p className="col-md-12">
          Département : <a href="#">Var</a> / Intercommunalité :{' '}
          <a href="#">Métropole Toulob Provence Méditerranée</a>
        </p>
        <div className="image col-md-3">
          <img
            src={officeTourism}
            alt="Office du Tourisme"
            title="Office du Tourisme"
          />
        </div>
        <div className="col-md-9 guide-text">
          <h2>Se faire accompagner</h2>
          <p>{name}</p>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{mail}</p>
          <p>{open}</p>
          <a href="https://toulontourisme.com">https://toulontourisme.com</a>
        </div>
        <hr className="col-md-10 underline" />
      </div>
    );
  };
}

export default Guide;
