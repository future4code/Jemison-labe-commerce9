import React from "react";
import { Adicionar } from './Adicionar'


function Home(props) {

    const { produtos, adicionarProduto } = props;

    return (

        <main>
            <h2>Produtos</h2>
            {produtos.map((produto) => (
                <Adicionar key={produto.id} produto={produto} adicionarProduto={adicionarProduto}></Adicionar>
            ))}
        </main>
    )
}

// onClick={() => adiciona(produto)}>Retirar do carrinho</> 

export default Home;