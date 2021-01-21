/* eslint-disable no-console */
import React from 'react';
import './css/styles.css';
import { FormGroup } from 'reactstrap';

const DatePicker = require('reactstrap-date-picker');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date().toISOString(),
    };
  }

  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    const hiddenInputElement = document.getElementById('example-datepicker');
    console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
    console.log(hiddenInputElement.getAttribute('data-formattedvalue')); // Formatted String, ex: "11/19/2016"
  }

  handleChange(value) {
    this.setState({
      value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      // formattedValue, // Formatted String, ex: "11/19/2016"
    });
  }

  render() {
    const { value } = this.state;
    return (
      <FormGroup className="datepicker">
        <DatePicker
          id="example-datepicker"
          value={value}
          dateFormat="DD/MM/YYYY"
          dayLabels={['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']}
          monthLabels={[
            'Janvier',
            'Février',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Août',
            'Septembre',
            'Octobre',
            'Novembre',
            'Décembre',
          ]}
          onChange={(v, f) => this.handleChange(v, f)}
        />
      </FormGroup>
    );
  }
}

export default App;
