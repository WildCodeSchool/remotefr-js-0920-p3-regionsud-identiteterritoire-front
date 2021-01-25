import React from 'react';
import Select from 'react-select';

const options = [
  { label: 'Habitant', value: 'habitant' },
  { label: 'Nouvel arrivant', value: 'nouvel arrivant' },
];

function SelectPersonas() {
  return (
    <Select
      options={options}
      className="select-picker"
      placeholder="Choisissez votre profil"
    />
  );
}

export default SelectPersonas;
