import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DarkForceContext from './DarkForceContext';
import fetchPlanets from '../services/API';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const contextValue = { data, setData };

  const fetchData = async () => {
    const Data = await fetchPlanets();
    setData(Data);
  };

  useEffect(() => { fetchData(); }, []);

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
