import React, { useState } from 'react';
import { Incrementar, Decrementar } from './variaciones';
import logo from './logo.svg';
import './App.css';

function App() {
  const [numero, setNumero] = useState(0);

  return (
    <div className="App">
      <header className="Ap-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>El numero: {numero}</p>
        <button onClick={() => Incrementar(numero, setNumero)}>Incrementar</button>
        <button onClick={() => Decrementar(numero, setNumero)}>Decrementar</button>
      </header>
    </div>
  );
}

export default App;
