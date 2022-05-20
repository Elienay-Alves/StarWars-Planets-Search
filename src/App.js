import React from 'react';
import './App.css';
import TheForceAwakensProvider from './context/TheForceAwakensProvider';
import Table from './components/Table';
import Filters from './components/Filter';

function App() {
  return (
    <TheForceAwakensProvider>
      <div>
        <Filters />
        <Table />
      </div>
    </TheForceAwakensProvider>
  );
}

export default App;
