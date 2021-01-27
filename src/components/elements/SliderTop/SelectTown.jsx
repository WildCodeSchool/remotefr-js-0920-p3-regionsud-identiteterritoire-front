import React from 'react';
import axios from 'axios';
import Select from 'react-select';

const options = [
  { label: 'Forcalquier', value: 'forcalquier' },
  { label: 'Marseille', value: 'marseille' },
  { label: 'Nice', value: 'nice' },
  { label: 'Toulon', value: 'toulon' },
];

class SelectTown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // query: '',
      // results: {},
      // loading: false,
      // message: '',
      // activeSearch: 'autocomplete?q=',
      // searchStatus: true,
    };
    this.getRandomTown = this.getRandomTown.bind(this);
    this.cancel = '';
  }

  componentDidMount() {
    this.getRandomTown();
  }

  getRandomTown() {
    const one =
      'https://regionsud-apiss-dev.woozy.fr/api/communes/autocomplete?q=toulon';

    axios.all([axios.get(one).then((response) => response.data)]).then(
      axios.spread((...data) => {
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          results: [data[0].meals[0], data[1].meals[0], data[2].meals[0]],
        });
      }),
    );
  }

  render() {
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
