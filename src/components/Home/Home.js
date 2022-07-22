import React from "react";

import {ContainerPai} from "./style";

export function Home(props) {
  const { produto, adicionar } = props;

  return (
    <ContainerPai>
            <img src={produto.foto} alt={produto.nome} />
            <h3>Preço :</h3>
            <div>{produto.Preco}</div>
            <h3>{produto.nome}</h3>
            <div>Space1</div>
            <span>{produto.Size}</span>
            <h3>Oferta válida somente essa semana!</h3>
            <button onClick={() => adicionar(produto)}>Adicionar ao Carrinho</button>
  </ContainerPai>
  );
}
