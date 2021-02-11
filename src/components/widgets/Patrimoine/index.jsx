import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/styles.css';
import PropTypes from 'prop-types';
import Select from 'react-select';
import logoMinistere from './images/logoMinistere.jpg';
import { Modal } from 'react-bootstrap';
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
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  //const [modalShow, setModalShow] = useState(false);
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

  const handleChange = (selected) => {
    setDistance(selected.value);
  };

  const clickOpenModal = (m) => {
    setModalShow(true);
    setModalContent(m);
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
              La base <b>Muséofile</b> permet de consulter les présentations des
              musées agréés par l&apos;Etat.Quelques instituitions, non
              porteuses de l&apos;appellation musée de France, comme celles
              relevant de l&apos;institut de France, figurent dans ce
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
                <div>
                  <BlockEvents
                    museee={museee}
                    clickOpenModal={clickOpenModal}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <PatrimoineModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        content={modalContent}
      />
    </section>
  );
}

function PatrimoineModal(props) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (!props.content.length) {
      console.log('modal', props.content.fields);
      setContent(props.content);
    }
  }, [props]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modal-Body-Patrimoine">
        <h3>
          <b>{content?.fields?.nomoff} </b>
        </h3>
        <div>
          Site officiel:
          <a
            href={`https://${content?.fields?.url_m}`}
            target="blank"
          >{`https://${content?.fields?.url_m}`}</a>
        </div>
        <p>
          <b>{content?.fields?.atout}</b>
        </p>
        <p>
          <h4 className="mt-4">Histoire</h4>
          {content?.fields?.hist}
        </p>
        {content?.fields?.hist}

        <p>
          <h4 className="mt-4">Intérêt</h4>
          {content?.fields?.interet}
        </p>

        <p>
          <h4 className="mt-4">Adresse</h4>
          <div>{content?.fields?.nomoff}</div>
          <div>{content?.fields?.adrl1_m}</div>
          <div>
            {content?.fields?.cp_m} {content?.fields?.ville_m}
          </div>

          <div>Tel : {content?.fields?.tel_m}</div>
        </p>
        {/* {content?.fields?.dompal}
        {content?.fields?.dist} */}
        <div id="carteMusee" />
      </Modal.Body>
    </Modal>
  );
}

function BlockEvents(props) {
  const { museee } = props;

  return (
    <div className="row BlockEvents-container">
      <div className="col-md-3">
        <div className="numberCircle">Mu</div>
      </div>
      <div className="col-md-9">
        <p>
          <b>{museee?.fields.nomoff}</b>
          <br />
          <div className="musee-text">{museee?.fields.atout}</div>
          <div className="text-right">
            <a
              onClick={() => props.clickOpenModal(museee)}
              className="aVoirPlus"
            >
              En voir plus
            </a>
          </div>
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
