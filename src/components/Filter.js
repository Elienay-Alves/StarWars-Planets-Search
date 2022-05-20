import React, { useContext } from 'react';
import DarkForceContext from '../context/DarkForceContext';

const Filters = () => {
  const { handleChange, changeNumericFilter, value } = useContext(DarkForceContext);
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];
  const columnOptions = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  return (
    <div>
      <label htmlFor="column">
        Column
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          { columnOptions
            .map((column) => <option key={ column.name }>{ column }</option>) }
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          {comparisonOptions
            .map((comparison) => <option key={ comparison.name }>{ comparison }</option>)}
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
