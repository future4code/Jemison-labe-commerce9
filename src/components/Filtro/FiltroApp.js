import React, {useState} from 'react';
import {Filters} from './components/Filtro/Filtro'
import {listaDeDados} from './components/Home/MockDeDados'
import { Home } from '../Home/Home';


export function FiltroApp() {

const [produtos, setProdutos] = useState(listaDeDados)
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
    return produto.nome.includes(nome)})
    .filter((produto)=>{
      return produto.Preco >= valorMin}) || valorMin === ""
    .filter((produto)=>{
        return produto.Preco <= valorMax}) || valorMax === ""
    
    .map(produto => {
      return <Home key={produto.nome} produto={produto}/>
    })}
  
   </div>
  </>
}
