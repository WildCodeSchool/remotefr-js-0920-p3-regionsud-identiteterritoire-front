import React from 'react';
import axios from 'axios';
import Select from 'react-select';

class SelectTown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
    this.cancel = '';
  }

  componentDidMount() {
    axios
      .get(`https://regionsud-api-dev.woozy.fr/api/communes/autocomplete/beta`)
      .then((res) => {
        this.setState({ options: res.data });
      });
  }

  render() {
    const { options } = this.state;
    return (
      <Select
        options={options}
        className="select-picker"
        placeholder="Choisissez votre ville"
      />
    );
  }
}

export default SelectTown;
