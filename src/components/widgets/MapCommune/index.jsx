import React from 'react';
import L from 'leaflet';
import { withRouter } from 'react-router';
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
    const map = L.map('map').setView([43.0589, 5.9299], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }

  render() {
    return <div id="map">Map</div>;
  }
}

export default withRouter(MapCommune);
