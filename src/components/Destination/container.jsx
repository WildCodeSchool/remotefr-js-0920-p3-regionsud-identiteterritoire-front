import React from 'react';
import Destination from './index';
import data from './data.json';

export default function DestinationContainer() {
  return (
    <Destination
      population={data.population}
      anneeRecensement={data.anneeRecensement}
      superficie={data.superficie}
      name={data.name}
      anneereprise={data.anneereprise}
    />
  );
}
