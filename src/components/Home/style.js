import React from "react";
import  styled  from "styled-components";









export const Card1 = styled.div`
 height: 100px;
    width: 100px;
    position: absolute;
    background-color: white;
    border-radius:10px ;
    z-index: 5;
    position: absolute;
    backface-visibility: hidden;
    content: '';
    height: 130px;
    width:130px ;
    background: hsla(318, 100%, 89%, 0.7);
    position: absolute;
    top: 50px;
    left: 60px;
    filter: blur(2px); 
    border-radius: 73% 27% 50% 50% / 39% 43% 57% 61% ;
    content: '';
    height: 130px;
    width:130px ;
    background: rgba(163, 226, 255, 0.5);
    position: absolute;
    top: 50px;
    left: 50px;
border-radius: 74% 26% 52% 48% / 37% 47% 53% 63% ;
content: '';
    height: 130px;
    width:130px ;
    background: hsla(318, 100%, 89%, 0.7);
    position: absolute;
    top: 50px;
    left: 60px;
    /* filter: blur(2px); */
    border-radius: 73% 27% 50% 50% / 39% 43% 57% 61% ;
    transform: rotateY(180deg);

`
export const Card2 = styled.div`
        height: 100px;
        width: 100px;
        position: absolute;
        background-color: white;
        border-radius: 10 px ;
        transform: rotateY(180deg);
        ::before{
        content: '';
        position: absolute;
        clip-path: circle(50% at 65% 24%);
        background-color: hsl(221, 100%, 84%, .7);
        height: 200px;
        width: 200px;
    right: 0;
        border-radius: 10px;
        }
`

  export const Content1 = styled.div`
      text-align: center;
      position: relative;
      top: 20px;
  `

export const SpanSubtitle = styled.span`
    position: relative;
    bottom: 15px; 
`

export const Underline = styled.span`
      border-bottom: 2px solid #ff79c7;
`


  export const Imagem = styled.img`

    height: 160px;
    transform: rotate(-15deg);
    position: relative;
    top: 10px;
    z-index: 8;

`


export const Imagem2 = styled.img`
    height: 150px;
    z-index: 15;
    position: absolute;
    transform: rotate(-15deg);
    left: 80px;
    top: 30px;
`


export const Content2 = styled.div`
    position: relative;
    top: 350px;
    left:30px;
    font-size: .8rem;
    line-height: 10px;
    width: 100%;

`

export const PrecoSpan = styled.div`
    position: absolute;
    top: 0;
    left: 50px;
`


export const PrecoS = styled.div`
    color: hsl(0, 0%, 71%);
`


export const SizeSpan = styled.div`
    display: inline-block;
    position: relative;
    left: 40px;
    bottom: 30px;
    text-align: center;
    font-size: .7rem;
    width:10px;
    height: 8px;
    margin: 2px;
    padding: 3px;
    border-radius: 2px;
    border: 1px solid rgb(135, 183, 255);
`


export const Color = styled.div`
    height: 10px;
`


export const ColorSpan = styled.div`
        background-color: rgb(177, 130, 184);
        display: inline-block;
        position: relative;
        left: 50px;
        bottom: 28px;
        text-align: center;
        font-size: .7rem;
        width:10px;
        height: 10px;
        padding: 1px;
        margin: 2px;
        border-radius: 50px;
        :nth-child(3){
        background-color: rgb(169, 175, 252);
        }
        :nth-child(4){
            background-color: #FFF;
        }
`
export const H4 = styled.h4`
    position: relative;
    bottom: 30px;
    font-weight: 100;
`

export const Botao = styled.div`
    position: relative;
    bottom: 30px;
    padding: 3px;
    width: 80px;
    border-radius: 2px;
    margin: 0  10px 0 0;
    cursor: pointer;
`




export const BotaoCarrinho = styled.button`
    padding: 4px;

    background-color: transparent;
    border: 1px solid rgb(76, 146, 211);
`


export const ContainerPai = styled.div`

height: 350 px;
    width: 260 px;
.ContainerPai:hover .Container2{ 
    transform: translateY(-180px);
    transition: 2s ease;
    overflow: hidden;
     background-color: #333;
    font-family: 'Quicksand', sans-serif;
}
    height: 350 px;
    width: 260 px;
    position: relative;
    transform-style: preserve-3d;
    transition: all 1s linear;
    cursor: pointer;
`
export const ContainerBotao =styled.div`

`
export const Preco =styled.div`

`
export const Size =styled.div`

`
export const Card= styled.div`
display: flex;
width: 400px;
height:400px;
align-items:center;
justify-content:center;

`