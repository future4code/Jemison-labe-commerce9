import {useState} from 'react';
import {Filters} from './components/Filtro/Filtro'
import {listaProdutos} from './components/MockDeDados'
import {Home} from './components/Home/Home'




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