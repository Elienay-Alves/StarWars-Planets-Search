import React, { useContext } from 'react';
import DarkForceContext from '../context/DarkForceContext';

const Filters = () => {
  const { handleChange,
    changeNumericFilter,
    numericFilter,
    value } = useContext(DarkForceContext);
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];
  const columnOptions = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const remover = (array) => {
    const FIVE = 5;
    const THREE = 3;
    if (array.length === FIVE) {
      numericFilter.forEach(({ column }) => {
        array.splice(array.indexOf(column), 1);
      });
      return array;
    } if (array.length === THREE) {
      numericFilter.forEach(({ comparison }) => {
        array.splice(array.indexOf(comparison), 1);
      });
      return array;
    }

    return array;
  };

  return (
    <div>
      <label htmlFor="column">
        Column
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          { remover(columnOptions)
            .map((column, index) => <option key={ index }>{ column }</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          {remover(comparisonOptions)
            .map((comparison, index) => <option key={ index }>{ comparison }</option>)}
        </select>
      </label>
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleChange }
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ changeNumericFilter }
      >
        FILTER
      </button>
    </div>
  );
};

export default Filters;
