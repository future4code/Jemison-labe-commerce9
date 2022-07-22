import React,{useState} from "react";
import {ContainerPai,Btn,CardBtn,Card,Imagem} from "./style";
import listaDeDados from './MockDeDados';
import Foto1 from './img/tshirtBlack.png';


function Homee(){

    const Card1= listaDeDados.map((produto,index)=>{
        return(
            <ContainerPai>
        <Card>
        <Imagem src={Foto1} alt="produto" />
        <h3>Preço :</h3>
        <div><p>130,00</p></div>
        <h3>Tamanho</h3>
        <span>M</span>
        <CardBtn>
         <Btn >Adicionar ao Carrinho</Btn> 
        </CardBtn>    
  </Card>
{/* //   { onClick={() => adicionar(produto)} } */}
      </ContainerPai>
        )
    })
   
  
    return(

     

        <div>

        </div>
    )
}
export default Homee;