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
    )import React,{useState} from "react";
    import {ContainerPai,Btn,CardBtn,Card,Imagem} from "./style";
    import {listaDeDados} from './MockDeDados';
    import {contador,incrementarContador} from './Adicionar';
    
    
    function Home(props){
        const[contador,setContador]=useState(0);
        function incrementarContador(){
         let   cont= contador+1;
            setContador(cont);
        }
        // const[adiciona,setAdiciona]=useState([...listaDeDados])
        // setAdiciona()=>{
        //     const produtoAdicionado = ...listaDeDados{index}+1;)
        //     setAdiciona(produtoAdicionado)
        // }
            
        
        //   console.log(adiciona)
        const Card1= listaDeDados.map((produto,index)=>{
           
         
            return(
         <ContainerPai key={index}>
               <Card key={produto.id}>
                   <Imagem src={produto.foto} alt="produto" />
                   <h3>{produto.nome}</h3>
                   <p>{produto.Preco}</p>
                   <h3>{produto.Size}</h3>
                   <span>{produto.ColorSpan}</span>
                   <CardBtn>
                         <h3>{contador}</h3>
                      <Btn onClick={incrementarContador}>
                        Adicionar ao Carrinho
                        </Btn    > 
                   </CardBtn>    
              </Card>
       
          </ContainerPai>
            )
        })
       
        // onClick={() => adiciona(produto)}>Retirar do carrinho</> 
        return(
    
         
    
            <div>
            {Card1}
            </div>
        )
    }
    export default Home;
}

export default Home;