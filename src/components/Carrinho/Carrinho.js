import React from 'react'

export function Carrinho(props) {

  const {cartItems , onAdd, onRemove } = props;

    // Para somar valor total de produtos
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);    
    const totalPrice = itemsPrice;

  const title = "Carrinho de Produtos"
  return (
    <aside>     
        <h1>{title}</h1>
        <div>{cartItems.length === 0 && <div>Carrinho está vazio</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onAdd(item)} className='add' >+</button>
                        <button onClick={() => onRemove(item)} className='remove'>-</button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} x R$ {item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr />
                    <div className='row'>
                        <div clasName='col-2'>Preço:</div>
                        <div clasName='col-1 text-right'> R$ {itemsPrice.toFixed(2)}</div>
                    </div>
                 
                    <div className='row'>
                        <div clasName='col-2'><strong>Preço Total</strong></div>
                        <div clasName='col-1 text-right'><strong>R$ {totalPrice.toFixed(2)}</strong></div>
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
