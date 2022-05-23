import React, { useContext } from 'react';
import DarkForceContext from '../context/DarkForceContext';

const searchItens = ['name', 'rotation_period', 'orbital_period',
  'diameter', 'climate', 'gravity', 'terrain', 'surface_water',
  'population', 'films', 'created', 'edited', 'url'];

const sortOut = (dataToFilter, order) => {
  const sortedOut = dataToFilter.sort((a, b) => {
    if (order.sort === 'ascendent') {
      return a[order.column] - b[order.column];
    }
    return b[order.column] - a[order.column];
  });
  const knownData = sortedOut.filter((planet) => planet[order.column] !== 'unknown');
  const unknownData = sortedOut.filter((planet) => planet[order.column] === 'unknown');
  return [...knownData, ...unknownData];
};

const filter = (dataToFilter, numberFilter, order) => {
  numberFilter.forEach((each) => {
    const { column, comparison, value } = each;
    dataToFilter = dataToFilter.filter((filtered) => {
      if (value || value === 0) {
        if (comparison.includes('maior')) {
          return filtered[column] > +value;
        } if (comparison.includes('menor')) {
          return filtered[column] < +value;
        }
        return filtered[column] === value;
      }
      return filtered;
    });
  });
  if (order) {
    return sortOut(dataToFilter, order);
  }
  return dataToFilter;
};

function Table() {
  const {
    data,
    filteredName,
    changeFilteredName,
    numericFilter,
    order,
  } = useContext(DarkForceContext);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ changeFilteredName }
      />

      <table>
        <thead>
          <tr>
            {searchItens.map((item, index) => (
              <th key={ index }>{ item }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data ? (filter(data, numericFilter, order)
            .filter((planetFiltered) => planetFiltered.name.includes(filteredName.name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.ediited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
