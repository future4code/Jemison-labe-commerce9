 labecomerce-jefferson
import React,{useState}from 'react';
import './App.css';
import Carrinho from './components/Carrinho/Carrinho';
import { Home } from './components/Home/Home';
import { listaDeDados } from './components/Home/MockDeDados';
=======
import {useState} from 'react';
import {Filters} from './components/Filtro/Filtro'
import {listaProdutos} from './components/MockDeDados'
import {Home} from './components/Home/Home'





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

      <Carrinho />
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