import React from 'react'
import { Cart, DivPrecoCart, SecaoBotaoCart } from './style'

export function Carrinho(props) {



    return (
        <Cart className='block col-1'>
        <DivPrecoCart>Preço:</DivPrecoCart>
            <h2>Itens no Carrinho</h2>

            <div className='col-2'>
                <button>+</button>
                <button>-</button>
            </div>

            <hr />
            <div className='row'>
                <SecaoBotaoCart onClick={() => alert('Compra concluída!')}>
                    Comprar
                </SecaoBotaoCart>
            </div>
        </Cart>
    )
}
