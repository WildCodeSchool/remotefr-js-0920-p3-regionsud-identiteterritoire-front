import React from 'react';
import L from 'leaflet';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * @class MapCommune
 * @description Map de la page commune
 */
class MapCommune extends React.Component {
  constructor(props) {
    super(props);
    this.state = { geocommune: [] };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.map = L.map('map').setView([43.0589, 5.9299], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    axios
      .get(`https://regionsud-api.woozy.fr/api/communes/${id}/geocommunes`)
      .then((res) => {
        const geocommune = res.data;
        this.setState({ geocommune });
      });
  }

  render() {
    const { geocommune } = this.state;
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

export default withRouter(MapCommune);

MapCommune.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
