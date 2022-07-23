import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Carrinho } from './components/Carrinho/Carrinho'


function App() {

  return (
    <div>
      <Carrinho />
      <Home />
    </div>
  );
}

export default App