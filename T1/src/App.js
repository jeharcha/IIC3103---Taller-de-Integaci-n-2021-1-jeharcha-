import NavBar from './components/navbar.jsx';
import './App.css';
import Counters from './components/counters.jsx';
import React, { Component } from 'react';

function App() {
  return (
    <React.Fragment>
      {/* El header de la página es el navbar */}
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
