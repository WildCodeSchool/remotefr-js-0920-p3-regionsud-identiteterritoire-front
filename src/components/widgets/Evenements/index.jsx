import React, { useState } from 'react';
import { FormGroup } from 'reactstrap';
import DatePicker from 'reactstrap-date-picker';
import PropTypes from 'prop-types';

// Import des css
import './css/styles.css';

// Import des images
import Arsud from './images/Arsud_spectacle.jpg';
import Faron from './images/faron.jpg';
import FeuDartifice from './images/feu_dartifice.jpg';
import JazzToulon from './images/jazz_toulon.jpg';

function Evenements() {
  const [date, setDate] = useState(null);
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
              la région Provence-Alpes-Côtesd&apos;Azur: Spéctacles, exposition,
              festivals,concerts, conférrence,saison théatrale etc ...
            </p>
            <img src={Arsud} className="logoArsud" alt="Responsive_imge" />
          </div>
          <div className="col-md-6">
            <BlockEvents
              title="Vivement dimanche au faron"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          deleniti culpa!"
              image={Faron}
            />

            <BlockEvents
              title="Feu d'artifice"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          incidunt quis id ex vel? "
              image={FeuDartifice}
            />

            <BlockEvents
              title="Festival Jazz Toulon"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          incidunt quis id ex vel?"
              image={JazzToulon}
            />
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
      <div className="col-md-4">
        <div className="circle">
          <img src={image} className="rounded-circle img-fluid" alt="tmp" />
        </div>
      </div>
      <div className="col-md-8">
        <p>
          <b>{title}</b>
          <br />
          {description}
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
