import React,{useState} from "react";
import {ContainerPai,Btn,CardBtn,Card,Imagem} from "./style";
import {listaDeDados} from './MockDeDados';
// import {contador,adicionarProduto} from './Adicionar';


function Home(props){

    
    function adicionarProduto(){
        const {produto, adicionarProduto} =props;
  
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
                  <Btn onClick={adicionarProduto}>
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