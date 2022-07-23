import React from "react";

 function Adicionar(props){
    const { produto, adicionarProduto } = props;
    return (
        <div>
            <img className='small' src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <div>{produto.preco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</div>
            <div>
            {/* adicionarProduto vem da função adicionarProduto no App.js */}
                <button onClick={() => adicionarProduto(produto)}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default Adicionar;