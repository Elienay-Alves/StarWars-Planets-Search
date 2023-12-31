import React, { useContext } from 'react';
import DarkForceContext from '../context/DarkForceContext';

const Filters = () => {
  const { handleChange,
    changeNumericFilter,
    numericFilter,
    deleteFilter,
    orderButton,
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
        <button
          type="button"
          name="filter"
          data-testid="button-remove-filters"
          onClick={ deleteFilter }
        >
          REMOVE FILTERS
        </button>
        <label htmlFor="columnOrder">
          Order
          <select
            name="columnOrder"
            data-testid="column-sort"
            onChange={ handleChange }
          >
            { columnOptions
              .map((column, index) => <option key={ index }>{ column }</option>)}
          </select>
        </label>
        <label htmlFor="ascendent-order">
          Ascendent
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            value="ascendent"
            name="radioOrder"
            onClick={ handleChange }
          />
        </label>
        <label htmlFor="descendent-order">
          Descendent
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            value="descendent"
            name="radioOrder"
            onClick={ handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ orderButton }
        >
          Set Order
        </button>
      </div>
      <div>
        { numericFilter.map((filter, index) => (
          <div key={ index } data-testid="filter">
            { `${filter.column} ${filter.comparison} ${filter.value}` }
            <button
              type="button"
              onClick={ deleteFilter }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
