import React,{useState}from 'react';
import './App.css';
import Carrinho from './components/Carrinho/Carrinho';
import { Home } from './components/Home/Home';
import { listaDeDados } from './components/Home/MockDeDados';



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
    </div>
  );



}

export default App;
