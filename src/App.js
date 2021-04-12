import NavBar from './components/navbar.jsx';
import './App.css';
import { Container } from 'react-bootstrap';
import Counters from "./components/counters.jsx";
import React, { Component } from 'react';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters/>
      </main>
    </React.Fragment>
    
  );
}

export default App;
