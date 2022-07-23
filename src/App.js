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

const [itensCarrinho, setItensCarrinho] = useState([]);

// Função para adicionar items ao carrinho
const adicionarProduto = (produto) => {

  const carrinho = itensCarrinho.find((item) => item.id === produto.id);

  if (carrinho) {
    setItensCarrinho(
      itensCarrinho.map((item) =>
        item.id === produto.id ? { ...carrinho, quantidade: carrinho.quantidade + 1 } : item
      )
    );
  } else {
    setItensCarrinho([...itensCarrinho, { ...produto, quantidade: 1 }]);
  }
}

// Função para excluir items do carrinho
const removerProduto = (produto) => {

  const carrinho = itensCarrinho.find((item) => item.id === produto.id);

  if (carrinho.quantidade === 1) {
    setItensCarrinho(
      itensCarrinho.filter((item) => item.id !== produto.id)
    );
  } else {
    setItensCarrinho(
      itensCarrinho.map((item) =>
        item.id === produto.id ? { ...carrinho, quantidade: carrinho.quantidade - 1 } : item
      )
    );
  }
}
 
  return (
    <div className='App'>
      <div className='row'>
        <Home
          adicionarProduto={adicionarProduto}
          produtos={produtos}
        />
        <Carrinho
          adicionarProduto={adicionarProduto}
          removerProduto={removerProduto}
          itensCarrinho={itensCarrinho}
        />
      </div>
    </div>
  );
  
}

export default App

