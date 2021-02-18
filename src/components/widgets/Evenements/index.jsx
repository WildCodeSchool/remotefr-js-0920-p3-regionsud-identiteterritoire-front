import React, { useState, useEffect } from 'react';
import { FormGroup } from 'reactstrap';
import DatePicker from 'reactstrap-date-picker';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
// Import des css
import './css/styles.css';
import axios from 'axios';
import Arsud from './images/Arsud_spectacle.jpg';

function Evenements() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(
          `${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/evenements`,
        )
        .then((res) => {
          if (res.data !== 0) {
            setEvents(res.data);
          }
        });
    }
  }, [id]);

  const handleChange = (value) => {
    setDate(value);
  };

  return (
    <section className="row">
      <div className="col-md-8 offset-md-2">
        <div className="row mb-3">
          <div className="col-md-6">
            <h3 className="titleEvenements">Evènements</h3>
          </div>
          <div className="col-md-6 mt-2">
            <FormGroup className="datepicker">
              <DatePicker
                placeholder="Choisir une date"
                className="select-date-picker"
                value={date}
                dateFormat="DD/MM/YYYY"
                dayLabels={['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']}
                monthLabels={[
                  'Janvier',
                  'Février',
                  'Mars',
                  'Avril',
                  'Mai',
                  'Juin',
                  'Juillet',
                  'Août',
                  'Septembre',
                  'Octobre',
                  'Novembre',
                  'Décembre',
                ]}
                onChange={(v, f) => handleChange(v, f)}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>
              <b>Culturo</b>
            </h4>
            <p>
              <b>Site web:</b>
              <a href="https://www.culturo.fr"> https://www.culturo.fr</a>
            </p>
            <p className="evenements-text">
              Culturo.fr publie l&apos;agenda des manifestations culturelles de
              la région Provence-Alpes-Côtesd&apos;Azur: Spectacles, exposition,
              festivals,concerts, conférence,saison théâtrale etc ...
            </p>
            <img src={Arsud} className="logoArsud" alt="Responsive_imge" />
          </div>
          <div className="col-md-6 scrollListBlock">
            {events?.map(function rg(event) {
              return (
                <div>
                  <BlockEvents event={event} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlockEvents({ event }) {
  return (
    <div className="row BlockEvents-container">
      <div className="col-md-3">
        <div className={`numberCircle-${event.icon}`}>{event.icon}</div>
      </div>
      <div className="col-md-9">
        <p>
          <b>{event.title}</b>
          <div className="events-date">Date : {event.date}</div>
          <div className="events-text">{event.description}</div>
        </p>
      </div>
    </div>
  );
}

BlockEvents.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Evenements;
