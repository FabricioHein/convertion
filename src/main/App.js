import React from 'react';
import './App.css';
import Conversor from '../Components/Conversor'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Moeda</h1>
       < Conversor moedaA="USD" moedaB="BRL"/>
      </header>
    </div>
  );
}

export default App;
