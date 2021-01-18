import React from 'react';
import L from 'leaflet';
/**
 * @class HomeMapBox
 * @description Map en bas de la home
 */
class HomeMapBox extends React.Component {
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
    return <div id="map">xx</div>;
  }
}

export default HomeMapBox;
