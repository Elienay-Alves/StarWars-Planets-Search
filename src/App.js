import React from 'react';
import './App.css';
import TheForceAwakensProvider from './context/TheForceAwakensProvider';
import Table from './components/Table';

function App() {
  return (
    <TheForceAwakensProvider>
      <div>
        <Table />
      </div>
    </TheForceAwakensProvider>
  );
}

export default App;
