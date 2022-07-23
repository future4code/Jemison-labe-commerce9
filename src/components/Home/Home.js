import React from "react";
import Adicionar from "./Adicionar";


function Home(props) {

    const { produtos, adicionarProduto } = props;

    return (
      <main className='block col-2'>
        <h2>Produtos</h2>
        <div className='row'>
          {produtos.map((produto) => (
            <Adicionar key={produto.id} produto={produto} adicionarProduto={adicionarProduto}></Adicionar>
          ))}
        </div>
      </main>
    )
    }

        



export default Home;