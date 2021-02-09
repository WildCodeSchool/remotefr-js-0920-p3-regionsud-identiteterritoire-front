import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import './css/styles.css';

const Raw = () => {
  const { id } = useParams();
  const [statistiques, setStatistiques] = useState([]);
  const [commune, setCommune] = useState([]);
  const [mairie, setMairie] = useState([]);
  const [maire, setMaire] = useState([]);
  const [slider, setSlider] = useState([]);
  const [geocommunes, setGeocommunes] = useState([]);
  const [tourisme, setTourismes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/tourismes/radar`,
      )
      .then((res) => {
        setStatistiques(res.data);
      });

    axios
      .get(`${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}`)
      .then((res) => {
        setCommune(res.data);
      });

    axios
      .get(`${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/mairie`)
      .then((res) => {
        setMairie(res.data);
      });

    axios
      .get(`${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/maire`)
      .then((res) => {
        setMaire(res.data);
      });

    axios
      .get(
        `${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/geocommunes`,
      )
      .then((res) => {
        setGeocommunes(res.data);
      });

    axios
      .get(`${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/slider`)
      .then((res) => {
        setSlider(res.data);
      });

    axios
      .get(
        `${process.env.REACT_APP_REGIONSUD_API_URL}/communes/${id}/tourismes?type=PATRIMOINE_CULTUREL`,
      )
      .then((res) => {
        setTourismes(res.data);
      });
  }, []);

  return (
    <div>
      <div className="superTitleRaw">Decouverte des data du site</div>
      <div className="rawTitle">Commune</div>
      <div className="rawSource">Source : INSEE</div>
      <pre className="line-numbers scroll">
        <code className="language-js ">{JSON.stringify(commune, null, 2)}</code>
      </pre>

      <div className="rawTitle">Information mairie</div>
      <div className="rawSource">Source : INSEE</div>
      <pre className="line-numbers scroll">
        <code className="language-json">{JSON.stringify(mairie, null, 2)}</code>
      </pre>

      <div className="rawTitle">Information maire</div>
      <div className="rawSource">Source : INSEE</div>
      <pre className="line-numbers scroll">
        <code className="language-json">{JSON.stringify(maire, null, 2)}</code>
      </pre>

      <div className="rawTitle">Gestion du slider</div>
      <div className="rawSource">Source : interne</div>
      <pre className="line-numbers scroll">
        <code className="language-json">{JSON.stringify(slider, null, 2)}</code>
      </pre>

      <div className="rawTitle">Information geolocalisation</div>
      <div className="rawSource">Source : interne</div>
      <pre className="line-numbers scroll">
        <code className="language-json">
          {JSON.stringify(geocommunes, null, 2)}
        </code>
      </pre>

      <div className="rawTitle">Compteurs d&apos;enevement commune</div>
      <div className="rawSource">Source : Apidae</div>
      <pre className="line-numbers scroll">
        <code className="language-json">
          {JSON.stringify(statistiques, null, 2)}
        </code>
      </pre>

      <div className="rawTitle">Exemple de donnée patrimoine</div>
      <div className="rawSource">Source : Apidae</div>
      <pre className="line-numbers scroll">
        <code className="language-json">
          {JSON.stringify(tourisme, null, 2)}
        </code>
      </pre>
    </div>
  );
};

export default Raw;
