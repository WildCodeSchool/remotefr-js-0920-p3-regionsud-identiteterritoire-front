import React from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
/**
 * @class MapCommune
 * @description Map de la page commune
 */
class MapCommune extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.map = L.map('map').setView([43.0589, 5.9299], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  render() {
    const { geocommune } = this.props;
    if (geocommune.geo_shape) {
      const geojsonFeature = {
        type: 'Feature',
        properties: {
          name: 'Coors Field',
          amenity: 'Baseball Stadium',
          popupContent: 'This is where the Rockies play!',
        },
        geometry: JSON.parse(geocommune.geo_shape),
      };
      L.geoJSON(geojsonFeature).addTo(this.map);
      this.map.setView(
        new L.LatLng(geocommune.longitude, geocommune.latitude),
        11,
      );
    }

    return <div id="map">Map</div>;
  }
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
