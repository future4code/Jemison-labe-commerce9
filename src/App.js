
import React from 'react';
import './App.css';
// import Carrinho from './components/Carrinho/Carrinho';
import Homee from './components/Home/Home';
// import { listaDeDados } from './components/Home/MockDeDados';
// import {Filters} from './components/Filtro/Filtro';
// import {listaProdutos} from './components/MockDeDados';
// // import { Filtro } from './components/Filtro';
// import { Home } from './components/Home/Home';






function App() {





  // const {produtos}=listaDeDados;

  // const[camisas,setCamisas]=useState([]);

  // const adicionar=(produto)=>{

  //  const existe = camisas.find(
  //      (x)=>x.id===produto.id
  //      )
  //      if (existe){
  //          setCamisas(
  //             camisas.map((x)=>
  //             x.id===produto.id?{...existe,qtd:existe.qtd+1}:x
  //             ) 
  //          )
  //      } else {

  //      }setCamisas([...setCamisas,{...produto,qtd:1}])
  // }





  return (
    <div className="App">
      <Homee/>
      {/* <Carrinho /> */}
      {/* <Filtro/> */}
    </div>
  );
  }




//  }



//   const [produtos] = useState(listaProdutos)
//   const [nome, setNome] = useState ("") 
//    const [valorMin, setValorMin] = useState (-Infinity)
//    const [valorMax, setValorMax] = useState (Infinity)

//    return <>
  
//     <Filters></Filters>
//      nome={nome}
//     setNome={setNome}
//     valorMin={valorMin}
//      setvalorMin={setValorMin}/     valorMax={valorMax}
//      setvalorMax={setValorMax}
     

//       <div>
//        {produtos
//       .filter((produto)=>{
//       return produto.name.includes(nome)})
//       .filter((produto)=>{
//          return produto.price >= valorMin}) || valorMin === ""
//       .filter((produto)=>{
//           return produto.price <= valorMax}) || valorMax === ""   
//        .map(produto => {
        //  return <Home key={produto.name} produto={produto}/>       })}
    
//      </div>
//     </>
  // }
export default App

