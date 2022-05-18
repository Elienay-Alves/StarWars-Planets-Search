import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DarkForceContext from './DarkForceContext';
import fetchPlanets from '../services/API';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filteredName, setFilteredName] = useState({
    name: '',
  });

  const fetchData = async () => {
    const Data = await fetchPlanets();
    setData(Data);
  };

  const changeFilteredName = ({ target }) => {
    setFilteredName({
      name: target.value,
    });
  };

  useEffect(() => { fetchData(); }, []);

  const contextValue = {
    data,
    filteredName,
    changeFilteredName,
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
