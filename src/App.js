import React from 'react';
import './App.css';
import {Carrinho} from './components/Carrinho/Carrinho';
import { Filtro } from './components/Filtro';
import { Home } from './components/Home/Home';


function App() {
  return (
    <div className="App">
     <Home/>
      <Carrinho />
      <Filtro/>
    </div>
  );
}

export default App;
