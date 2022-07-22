
import React,{useState}from 'react';
import './App.css';
import Carrinho from './components/Carrinho/Carrinho';
import {Carrinho} from './components/Carrinho/Carrinho';
import { Filtro } from './components/Filtro';
import { Home } from './components/Home/Home';
import { listaDeDados } from './components/Home/MockDeDados';
import {useState} from 'react';




function App() {



  const {produtos}=listaDeDados;

  const[camisas,setCamisas]=useState([]);

  const adicionar=(produto)=>{

   const existe = camisas.find(
       (x)=>x.id===produto.id
       )
       if (existe){
           setCamisas(
              camisas.map((x)=>
              x.id===produto.id?{...existe,qtd:existe.qtd+1}:x
              ) 
           )
       } else {

       }setCamisas([...setCamisas,{...produto,qtd:1}])
  }




  return (
    <div className="App">

      <Carrinho />
      <Filtro/>
    </div>
  );
  }

  export default App