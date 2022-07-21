import React,{useState} from "react";
import {Card, Card1,Card2,Content1,Imagem,SpanSubtitle,Underline,Imagem2,Preco,PrecoSpan,Color,ColorSpan,Size,SizeSpan,ContainerPai,Botao,BotaoCarrinho,BotaoComprar,PrecoS,ContainerBotao,Content2,H4 } from "./style";


export function Home(){


    return(
         <Card>
    <ContainerPai>
                
                <Card1>
              <Content1>
                <Imagem class="img" src="https://i.postimg.cc/L5XXtdhZ/sneakers-removebg-preview.png" alt=""/>
                  <h3 class="title">Space tshirts</h3>
                  <SpanSubtitle>50% - 80% <Underline>Desconto</Underline></SpanSubtitle>
              </Content1>
          </Card1>



          <Card2>
              <Imagem2 src="https://i.postimg.cc/L5XXtdhZ/sneakers-removebg-preview.png" alt=""/>
              <Content2>

                  <Preco>
                      <h3>Preço :</h3><PrecoSpan><PrecoS>$75</PrecoS> $25</PrecoSpan>
                  </Preco>

                  <Color>
                      <h3>Nome :</h3>
                      <ColorSpan>Space1</ColorSpan>
                      <ColorSpan>Space2</ColorSpan>
                      <ColorSpan>Space3</ColorSpan>
                     
                    
                  </Color>

                  <Size>
                      <h3>Tamanho: </h3>
                      <SizeSpan>P</SizeSpan>
                      <SizeSpan>M</SizeSpan>
                      <SizeSpan>G</SizeSpan>
                    
                  </Size>

                  <H4>Oferta válida somente essa semana!</H4>
              <ContainerBotao>
               <BotaoCarrinho>Adicionar ao Carrinho</BotaoCarrinho>
              </ContainerBotao>
                </Content2>
          </Card2>

      </ContainerPai>
 
      </Card>

    )
}