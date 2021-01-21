import React from 'react';
import Select from 'react-select';

const options = [
  { label: 'Forcalquier', value: 'forcalquier' },
  { label: 'Marseille', value: 'marseille' },
  { label: 'Nice', value: 'nice' },
  { label: 'Toulon', value: 'toulon' },
];

function SelectTown() {
  return (
    <Select
      options={options}
      className="select-picker"
      placeholder="Choisissez votre ville"
    />
  );
}

export default SelectTown;
