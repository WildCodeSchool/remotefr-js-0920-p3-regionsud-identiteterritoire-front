import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import './css/styles.css';
/**
 * @class MapCommune
 * @description Map de la page commune
 */

function MapCommune(props) {
  const { geocommune } = props;
  const [latLng] = useState([43.0589, 5.9299]);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef();
  const layerRef = useRef();

  useEffect(() => {
    mapRef.current = L.map('map', {
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
      ],
    }).setView(latLng, 12);
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
          new L.LatLng(marker.longitude, marker.latitude),
        ).addTo(layerRef.current);
        m.bindPopup(
          `<div class="row"><div class="col-md-4"><img src="${marker.image}" class="img-fluid" alt="Marseille"/></div><div class="col-md-8"><h2>${marker.name}</h2><p>${marker.text}</p></div></div>`,
          {
            maxWidth: 560,
            minWidth: 300,
          },
        );
        m.on('click', function popitthis() {
          m.openPopup();
        });
      });
    }
  }, [markers]);

  /**
   * @name handleClick
   * @description function d'ajout des markers en state
   */
  function handleClick(value) {
    const resto = [
      {
        name: "Le cochon d'or",
        longitude: 43.711999266051,
        latitude: 7.2382688946467,
        image:
          'https://img.over-blog-kiwi.com/2/55/12/01/20200806/ob_04cead_la-salle-to-restaurant-paris-10.jpg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt dicta id maiores accusamus blanditiis dolore debitis, autem quia molestiae quas temporibus, ut fuga numquam modi repellat! Perspiciatis, quam deserunt.',
      },

      {
        name: 'Le Bouqet fleurie',
        longitude: 43.9,
        latitude: 7.7,
        image:
          'https://www.yonder.fr/sites/default/files/styles/scale_1008x672/public/destinations/restaurant-prado-lisbonne_1.jpg?itok=StdCt1xY',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt dicta id maiores accusamus blanditiis dolore debitis, autem quia molestiae quas temporibus, ut fuga numquam modi repellat! Perspiciatis, quam deserunt.',
      },

      {
        name: 'La pause',
        longitude: 43.8,
        latitude: 7.4,
        image:
          'https://restaurantdupalaisroyal.com/wp-content/uploads/2020/02/Restaurant_du_Palais_Royal_RDC_11_GdeLaubier.jpg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt dicta id maiores accusamus blanditiis dolore debitis, autem quia molestiae quas temporibus, ut fuga numquam modi repellat! Perspiciatis, quam deserunt.',
      },
    ];

    const camping = [
      {
        name: 'Les flots bleue',
        longitude: 43.67,
        latitude: 7.32,
        image:
          'https://img-4.linternaute.com/G1iusbKNQnbpYDZsSxJtr5rzupk=/660x366/smart/87c9629abc9e47ad957fc712ebf37bd8/ccmcms-linternaute/18498156.jpg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt dicta id maiores accusamus blanditiis dolore debitis, autem quia molestiae quas temporibus, ut fuga numquam modi repellat! Perspiciatis, quam deserunt.',
      },

      {
        name: 'La rose',
        longitude: 43.92,
        latitude: 7.74,
        image: 'https://cdn2.acsi.eu/5/c/1/2/5c127c6cc5315.jpeg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt dicta id maiores accusamus blanditiis dolore debitis, autem quia molestiae quas temporibus, ut fuga numquam modi repellat! Perspiciatis, quam deserunt.',
      },

      {
        name: 'La gaillote',
        longitude: 43.85,
        latitude: 7.67,
        image:
          'https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/04/20/node_146216/11807835/public/2020/04/20/B9723264353Z.1_20200420190750_000%2BG3SFTF6MA.1-0.jpg?itok=uuvE5MFU1587475762',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt dicta id maiores accusamus blanditiis dolore debitis, autem quia molestiae quas temporibus, ut fuga numquam modi repellat! Perspiciatis, quam deserunt.',
      },
    ];

    const comico = [
      {
        name: 'Commisaria Gambetta',
        longitude: 43.7,
        latitude: 7.23,
        image:
          'https://france3-regions.francetvinfo.fr/image/76d5IfhosQO4SMpbB0mOKXts9w0/600x400/regions/2020/08/25/5f451f0dd2de9_p1013093-4973164.jpg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt dicta id maiores accusamus blanditiis dolore debitis, autem quia molestiae quas temporibus, ut fuga numquam modi repellat! Perspiciatis, quam deserunt.',
      },

      {
        name: 'Commisaria Centre ville',
        longitude: 43.85,
        latitude: 7.67,
        image:
          'https://www.pagesjaunes.fr/media/resto/commissariat_de_police_OSD12156711-69612.jpeg',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt dicta id maiores accusamus blanditiis dolore debitis, autem quia molestiae quas temporibus, ut fuga numquam modi repellat! Perspiciatis, quam deserunt.',
      },
    ];
    switch (value) {
      case 'comico':
        setMarkers(comico);
        break;

      case 'camping':
        setMarkers(camping);
        break;

      case 'resto':
        setMarkers(resto);
        break;
      default:
        setMarkers([]);
        break;
    }
  }

  return (
    <div className="row relative">
      <div className="bigTitle abso-choisir-sur-carte">Info sur la ville</div>
      <div className="mapMenuCommuneBlock">
        <div className="mapMenuCommuneTitle">Faite votre choix</div>
        <div className="mapMenuCommuneList">
          <button type="button" onClick={() => handleClick('resto')}>
            Resto
          </button>
          <button type="button" onClick={() => handleClick('camping')}>
            Camping
          </button>
          <button type="button" onClick={() => handleClick('comico')}>
            Commissaria
          </button>
        </div>
      </div>
      <div id="map" />
    </div>
  );
}

MapCommune.propTypes = {
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

export default MapCommune;
