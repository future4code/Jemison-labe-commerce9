import {useState} from 'react';
import {Filters} from './components/Filtro/Filtro'
import { DigitaFiltro } from './components/Filtro/style';
import {listaProdutos} from './components/MockDeDados'


function App() {

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
        return produto.valor >= valorMin}) || valorMin === ""
      .filter((produto)=>{
          return produto.valor <= valorMax}) || valorMax === ""
      
      .map(produto => {
        return <listaProdutos key={produto.id} produto={produto}/>
      })}
    
     </div>
    </>
}
export default App