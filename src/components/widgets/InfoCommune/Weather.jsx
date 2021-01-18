import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import PropTypes from 'prop-types';
import './css/weather.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    axios
      .get(`https://regionsud-api.woozy.fr/api/communes/${id}/meteo`)
      .then((res) => {
        const weather = res.data;
        this.setState({ weather });
      });
  }

  /**
   * @name randomWeatherImages
   * @description génération d'une image aleatoire pour la meteo
   */
  randomWeatherImages = () => {
    const pictures = [
      'cloud.jpg',
      'neige.jpg',
      'orage.jpg',
      'pluie.jpg',
      'suncloud.jpg',
    ];
    return `/images/${pictures[Math.floor(Math.random() * pictures.length)]}`;
  };

  render() {
    const { weather } = this.state;
    const pictureUrlWeather = this.randomWeatherImages();
    return (
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center weaderlogo">
          <img
            src={pictureUrlWeather}
            className="img-rate-quality-picto"
            alt="Responsive_imge"
          />
        </div>
        <div className="col-md-4 d-flex justify-content-start weaderlogo ">
          <h2>
            <b>{weather.temperature}.0°</b>
          </h2>
        </div>
        <div className="col-md-4 gbright-color d-flex justify-content-start">
          <p>
            Vent:{weather.vent_direction} <br /> {weather.vent_vitesse}Km/h
          </p>
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(Weather);
