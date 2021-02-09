import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import './css/styles.css';
import Select from 'react-select';

function SearchBar() {
  const [city, setCity] = useState([]);
  const [options, setOptions] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_REGIONSUD_API_URL}/communes/autocomplete/beta`,
      )
      .then((res) => {
        setOptions(res.data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/commune/${city.value}`);
    return 'Le choix a bien été soumis';
  };

  const handleChange = (selected) => {
    setCity(selected);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center align-self-center h100">
        <div className="vertical-center">
          <div className="roundedFormsHome">
            <Select
              options={options}
              value={city}
              onChange={handleChange}
              className="select-picker"
              placeholder="Choisissez votre ville"
            />
            <button type="submit" className="dot">
              <i className="fas fa-search search-icon" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
