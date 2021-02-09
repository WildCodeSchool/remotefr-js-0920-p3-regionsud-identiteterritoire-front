import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/weather.css';
import PropTypes from 'prop-types';

function Weather(props) {
  const { codeInsee } = props;
  const [wind, setWind] = useState([]);
  const [weather, setWeather] = useState([]);
  const [main, setMain] = useState([]);

  useEffect(() => {
    if (codeInsee) {
      axios
        .get(
          `${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${codeInsee}/meteo`,
        )
        .then((res) => {
          setWind(res.data.wind);
          setWeather(res.data.weather.pop());
          setMain(res.data.main);
        });
    }
  }, [codeInsee]);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="MeteoTitle text-center">Météo</div>
      </div>

      <div className="col-md-6">
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.description}
        />
      </div>

      <div className="col-md-6">
        <div className="weather-degree">{main.temp}°</div>
        <div className="weather-wind-speed">
          <div className="text-center">
            <b>Vent</b> : {wind.speed}km/h
          </div>
        </div>
      </div>
    </div>
  );
}

Weather.propTypes = { codeInsee: PropTypes.number.isRequired };

export default Weather;
