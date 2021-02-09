import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/styles.css';
import PropTypes from 'prop-types';
import Select from 'react-select';
import logoMinistere from './images/logoMinistere.jpg';
import logoMusee from './images/logoMusee.jpg';
// import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

// const renderTooltip = (props) => (
//   <Tooltip id="button-tooltip" {...props}>
//     Simple tooltip
//   </Tooltip>
// );

// <OverlayTrigger
//   placement="right"
//   delay={{ show: 250, hide: 400 }}
//   overlay={renderTooltip}
// >
//   <Button variant="success">Hover me to see</Button>
// </OverlayTrigger>;

function Patrimoine({ geocommune }) {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [distance, setDistance] = useState(10000);
  const [museees, setMuseees] = useState([]);

  const distanceOptions = [
    { value: '10000', label: '10km' },
    { value: '15000', label: '15km' },
    { value: '20000', label: '20km' },
    { value: '25000', label: '25km' },
    { value: '30000', label: '30km' },
  ];

  useEffect(() => {
    if (!geocommune.length) {
      setLongitude(geocommune.longitude);
      setLatitude(geocommune.latitude);
    }
  }, [geocommune]);

  useEffect(() => {
    if (longitude && latitude && distance) {
      axios
        .get(
          `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=musees-de-france-base-museofile&q=&facet=dompal&facet=region&refine.region=Provence-Alpes-C%C3%B4te+d%27Azur&geofilter.distance=${longitude},${latitude},${distance}`,
        )
        .then((res) => {
          if (res.data.records.length !== 0) {
            setMuseees(res.data.records);
          }
        });
    }
  }, [longitude, latitude, distance]);

  // const handleChange = (e) => {
  //   console.log(e);
  // };

  const handleChange = (selected) => {
    setDistance(selected.value);
  };
  return (
    <section className="row">
      <div className="col-md-8 offset-md-2">
        <div className="row mb-3">
          <div className="col-md-6">
            <h3 className="titlePatrimoine">Patrimoine</h3>
          </div>
          <div className="col-md-6">
            <Select
              options={distanceOptions}
              value={distance}
              onChange={handleChange}
              className="select-picker"
              placeholder="Choisissez une distance"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>
              <b>Musées</b>
            </h4>

            <p className="patrimoine-text">
              La base <b>Muséofile</b> permet de consulter les présentation des
              musées agréés par l&apos;Etat.Quelques instituitions, non
              porteuses de l&apos;appellation musée de France, comme celles
              relavant de l&apos;institut de France, figurent dans ce
              recensement.
            </p>
            <img
              src={logoMinistere}
              className="logoMinister"
              alt="Logo du ministère de la culture"
            />
          </div>
          <div className="col-md-6 scrollListBlock">
            {museees?.map(function rg(museee) {
              return (
                <BlockEvents
                  title={museee.fields.nomoff}
                  description={museee.fields.atout}
                  image={logoMusee}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlockEvents(props) {
  const { title, description, image } = props;
  return (
    <div className="row BlockEvents-container">
      <div className="col-md-3">
        <div className="circle">
          <img src={image} className="rounded-circle img-fluid" alt={title} />
        </div>
      </div>
      <div className="col-md-9">
        <p>
          <b>{title}</b>
          <br />
          <div className="musee-text">{description}</div>
        </p>
      </div>
    </div>
  );
}

Patrimoine.propTypes = {
  geocommune: PropTypes.shape({
    longitude: PropTypes.string.isRequired,
    latitude: PropTypes.string.isRequired,
    lenght: PropTypes.number.isRequired,
  }).isRequired,
};

BlockEvents.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Patrimoine;
