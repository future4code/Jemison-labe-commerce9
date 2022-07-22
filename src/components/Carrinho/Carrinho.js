import React from 'react'
import { Botao, Cabecalho } from './style'

export function Carrinho() {

  const title = "Carrinho de Produtos"
  return (
    <div>
      <Cabecalho>
        <h1>{title}</h1>
      </Cabecalho>
    <Botao>Excluir produto</Botao>
    </div>
  )
}



