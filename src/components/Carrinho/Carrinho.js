import React from 'react'

export function Carrinho(props) {

    const { itensCarrinho, adicionarProduto, removerProduto } = props;

    // Para somar valor total de produtos
    const precoDoProduto = itensCarrinho.reduce((a, c) => a + c.preco * c.quantidade, 0);

    const precoTotal = precoDoProduto;

    return (
        <aside className='block col-1'>
            <h2>Itens no Carrinho</h2>
            <div>{itensCarrinho.length === 0 && <div>Carrinho está vazio</div>}</div>
            {itensCarrinho.map((item) => (
                <div key={item.id} className="row">
                    <div className='col-2'>{item.nome}</div>
                    <div className='col-2'>
                        <button onClick={() => adicionarProduto(item)} className='add' >+</button>
                        <button onClick={() => removerProduto(item)} className='remove'>-</button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.quantidade} x R$ {item.preco.toFixed(2)}
                    </div>
                </div>
            ))}
            {itensCarrinho.length !== 0 && (
                <>
                    <hr />
                    <div className='row'>
                        <div className='col-2'>Preço:</div>
                        <div className='col-1 text-right'> R$ {precoDoProduto.toFixed(2)}</div>
                    </div>
                    {/* <div className='row'>
                        <div clasName='col-2'>Tax Price</div>
                        <div clasName='col-1 text-right'> R$ {taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div clasName='col-2'>Shipping Price</div>
                        <div clasName='col-1 text-right'> R$ {shippingPrice.toFixed(2)}</div>
                    </div>*/}
                    <div className='row'>
                        <div className='col-2'><strong>Preço Total</strong></div>
                        <div className='col-1 text-right'><strong>R$ {precoTotal.toFixed(2)}</strong></div>
                    </div>
                    <hr />
                    <div className='row'>
                        <button onClick={() => alert('Compra concluída!')}>
                            Comprar
                        </button>
                    </div>
                </>
            )}
        </aside>
    )
}
