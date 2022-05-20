import React, { useContext } from 'react';
import DarkForceContext from '../context/DarkForceContext';

const searchItens = ['name', 'rotation_period', 'orbital_period',
  'diameter', 'climate', 'gravity', 'terrain', 'surface_water',
  'population', 'films', 'created', 'edited', 'url'];

const filter = (dataToFilter, numberFilter) => {
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
  return dataToFilter;
};

function Table() {
  const {
    data,
    filteredName,
    changeFilteredName,
    numericFilter,
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
          {data ? (filter(data, numericFilter)
            .filter((planetFiltered) => planetFiltered.name.includes(filteredName.name))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
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
