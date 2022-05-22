import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DarkForceContext from './DarkForceContext';
import fetchPlanets from '../services/API';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filteredName, setFilteredName] = useState({
    name: '',
  });
  const [numericFilter, setNumericFilter] = useState([]);
  const [value, setValue] = useState(0);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');

  const fetchData = async () => {
    const Data = await fetchPlanets();
    setData(Data);
  };

  const changeFilteredName = ({ target }) => {
    setFilteredName({
      name: target.value,
    });
  };

  const changeNumericFilter = () => {
    const object = {
      column,
      comparison,
      value,
    };
    const objectValues = [...numericFilter, object];
    setNumericFilter(objectValues);
  };

  const handleChange = ({ target }) => {
    if (target.name === 'column') {
      setColumn(target.value);
    } if (target.name === 'comparison') {
      setComparison(target.value);
    } if (target.name === 'value') {
      setValue(target.value);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const deleteFilter = ({ target }) => {
    if (target.name === 'filter') {
      setNumericFilter([]);
    } else {
      const updatedFilter = numericFilter
        .filter((item) => item.column !== target.parentNode.innerHTML.split(' ')[0]);
      setNumericFilter(updatedFilter);
    }
  };

  const contextValue = {
    data,
    filteredName,
    changeFilteredName,
    handleChange,
    column,
    comparison,
    value,
    numericFilter,
    changeNumericFilter,
    deleteFilter,
  };

  return (
    <DarkForceContext.Provider value={ contextValue }>
      { children }
    </DarkForceContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
