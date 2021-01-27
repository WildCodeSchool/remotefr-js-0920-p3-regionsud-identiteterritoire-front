import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import './css/styles.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
/**
 * @class MapCommune
 * @description Map de la page commune
 */

function MapCommune(props) {
  const { geocommune } = props;
  const [markers, setMarkers] = useState([]);
  const [mapOptions, setMapOptions] = useState([]);
  const mapRef = useRef();
  const layerRef = useRef();

  /**
   * @description creation du template de popup
   */
  function templatePopup(marker) {
    return `<div class="row mapPopup"><div class="col-md-4"><img src="${
      marker.illustrations[0].urlDiaporama
    }" class="img-fluid mapPopupImg" alt="${
      marker.nom
    }"/></div><div class="col-md-8"><h3>${marker.nom}</h3><p>${
      marker.description
    }</p>
${marker.telephone ? `<div><b>Téléphone</b> : ${marker.telephone}</div>` : ''}
          ${
            marker.www
              ? `<div><b>Site internet</b> : <a href="${marker.www}" target="blank">${marker.www}</a></div>`
              : ''
          }
          ${marker.email ? `<div><b>Email</b> : ${marker.email}</div>` : ''}
          ${marker.fax ? `<div><b>Fax</b> : ${marker.fax}</div>` : ''}
          </div></div>`;
  }
  /**
   * @description creation de la carte et des UseRef
   */

  useEffect(() => {
    mapRef.current = L.map('map', {
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
      ],
    }).setView([43.0589, 5.9299], 12);
    layerRef.current = L.featureGroup().addTo(mapRef.current);
  }, []);

  /**
   *
   * @description creation de la zone bleue
   */
  useEffect(() => {
    if (geocommune.geo_shape) {
      const geojsonFeature = {
        type: 'Feature',
        properties: {
          name: 'Geozone',
        },
        geometry: JSON.parse(geocommune.geo_shape),
      };
      L.geoJSON(geojsonFeature).addTo(mapRef.current);
      mapRef.current.flyTo(
        new L.LatLng(geocommune.longitude, geocommune.latitude),
        11,
      );
    }
  }, [geocommune.code_insee]);

  /**
   *
   * @description Ajout des markers sur la carte
   */

  useEffect(() => {
    if (markers) {
      layerRef.current.clearLayers();

      markers.forEach((marker) => {
        const m = L.marker(
          new L.LatLng(marker.latitude, marker.longitude),
        ).addTo(layerRef.current);
        m.bindPopup(templatePopup(marker), {
          maxWidth: 610,
          minWidth: 610,
        });
        m.on('click', function popitthis() {
          m.openPopup();
          // mapRef.current.setView(
          //   new L.LatLng(marker.latitude, marker.longitude),
          //   16,
          // );
        });
      });

      if (markers.length) {
        // Recentrage des datas
        const bounds = layerRef.current.getBounds();
        mapRef.current.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [markers]);

  /**
   * @name handleClick
   * @description function d'ajout des markers en state
   */
  function handleClick(value) {
    const {
      match: {
        params: { id },
      },
    } = props;
    axios
      .get(
        `https://regionsud-api-dev.woozy.fr/api/communes/${id}/tourismes?type=${value}`,
      )
      .then((res) => {
        setMarkers(res.data);
      });
  }
  /**
   *
   * @description recupere la liste des activité & possible
   */
  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;

    if (!mapOptions.length) {
      axios
        .get(
          `https://regionsud-api-dev.woozy.fr/api/communes/${id}/tourismes/counter`,
        )
        .then((res) => {
          setMapOptions(res.data);
        });
    }
  }, [mapOptions]);

  return (
    <div className="row relative">
      <div className="bigTitle abso-choisir-sur-carte">Info sur la ville</div>
      <div className="mapMenuCommuneBlock">
        <div className="mapMenuCommuneTitle">Faite votre choix</div>
        <div>
          {mapOptions.map(function mpo(item, i) {
            return (
              <button
                key={item.name}
                type="button"
                tabIndex={i}
                className="mapMenuCommuneListLink"
                onClick={() => handleClick(item.type)}
                onKeyDown={() => handleClick(item.type)}
              >
                {item.name}
                <span className="mapOptionsCounter">({item.total})</span>
              </button>
            );
          })}
        </div>
      </div>
      <div id="map" />
    </div>
  );
}

MapCommune.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  geocommune: PropTypes.shape({
    id: PropTypes.number.isRequired,
    code_insee: PropTypes.string,
    altitude: PropTypes.string,
    superficie: PropTypes.string,
    population: PropTypes.string,
    longitude: PropTypes.string,
    latitude: PropTypes.string,
    geo_shape: PropTypes.string,
  }).isRequired,
};

export default withRouter(MapCommune);
