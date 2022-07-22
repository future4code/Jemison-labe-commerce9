<<<<<<< HEAD
import React from 'react';
=======
 labecomerce-jefferson
import React,{useState}from 'react';
>>>>>>> 3395cd811cd06328a3223325650c7e7ba7fa2b5d
import './App.css';
import {Carrinho} from './components/Carrinho/Carrinho';
import { Filtro } from './components/Filtro';
import { Home } from './components/Home/Home';
<<<<<<< HEAD
=======
import { listaDeDados } from './components/Home/MockDeDados';
=======
import {useState} from 'react';
import {Filters} from './components/Filtro/Filtro'
import {listaProdutos} from './components/MockDeDados'
import {Home} from './components/Home/Home'



>>>>>>> 3395cd811cd06328a3223325650c7e7ba7fa2b5d


function App() {
 labecomerce-jefferson



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
<<<<<<< HEAD
     <Home/>
=======

>>>>>>> 3395cd811cd06328a3223325650c7e7ba7fa2b5d
      <Carrinho />
      <Filtro/>
    </div>
  );



}

 master

  const [produtos] = useState(listaProdutos)
  const [nome, setNome] = useState ("") 
  const [valorMin, setValorMin] = useState (-Infinity)
  const [valorMax, setValorMax] = useState (Infinity)

  return <>

    <Filters
    nome={nome}
    setNome={setNome}
    valorMin={valorMin}
    setvalorMin={setValorMin}
    valorMax={valorMax}
    setvalorMax={setValorMax}
    />

     <div>
      {produtos
      .filter((produto)=>{
      return produto.name.includes(nome)})
      .filter((produto)=>{
        return produto.price >= valorMin}) || valorMin === ""
      .filter((produto)=>{
          return produto.price <= valorMax}) || valorMax === ""
      
      .map(produto => {
        return <Home key={produto.name} produto={produto}/>
      })}
    
     </div>
    </>
}
export default App