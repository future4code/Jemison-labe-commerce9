import React, {useState} from 'react';
import './App.css';
import { Carrinho } from './components/Carrinho/Carrinho';
import Home from './components/Home/Home';
import { listaDeDados } from './components/Home/MockDeDados';
// import {Filters} from './components/Filtro/Filtro';
// // import { Filtro } from './components/Filtro';
// import { Home } from './components/Home/Home';

function App() {
const {produtos} = listaDeDados;

  const [cartItems, setCartItems] = useState([]);

  // Função para somar items ao carrinho
  const onAdd = (produto) => {

    const exist = cartItems.find((x) => x.id === produto.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === produto.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...produto, qty: 1 }]);
    }
  }

  // Função para excluir items do carrinho
  const onRemove = (produto) => {

    const exist = cartItems.find((x) => x.id === produto.id);

    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((x) => x.id !== produto.id)
      );
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === produto.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }
 
  return (
    <div className="App">
     <div countCartItems={cartItems.length} />
      <div className='row'></div>
      <Home
        onAdd={onAdd}
        produtos={produtos} />
      <Carrinho
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems} />
      {/* <Filtro/> */}
    </div>
  );
}

export default App

