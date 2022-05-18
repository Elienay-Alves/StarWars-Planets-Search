import React, { useContext } from 'react';
import DarkForceContext from '../context/DarkForceContext';

const searchItens = ['name', 'rotation period', 'orbital_period',
  'diameter', 'climate', 'gravity', 'terrain', 'surface water',
  'population', 'films', 'created', 'edited', 'url'];

const Table = () => {
  const { data, filteredName, changeFilteredName } = useContext(DarkForceContext);

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
          {data ? (data
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
};

export default Table;
