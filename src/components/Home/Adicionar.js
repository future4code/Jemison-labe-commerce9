import React from "react";
import { ContainerPai } from "./style";
import { Card, CardBtn, Btn, Imagem } from "./style";

 export function Adicionar(props){
    const { produto, adicionarProduto } = props;
    return (
        <ContainerPai >
        <Card key={produto.id}>

            <Imagem src={produto.foto} alt="produto" />
            <h3>{produto.nome}</h3>
            <p>{produto.Preco}</p>
            <h3>{produto.Size}</h3>
            <span>{produto.ColorSpan}</span>
            <CardBtn>
                <Btn onClick={() => adicionarProduto(produto)} >
                    Adicionar ao Carrinho
                 
                </Btn>
            </CardBtn>
        </Card>

    </ContainerPai>
    )
}

