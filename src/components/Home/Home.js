import React  from "react";
import {ContainerPai,Btn,CardBtn,Card,Imagem} from "./style";
import {listaDeDados} from './MockDeDados';



function Homee(props){
    // const[adiciona,setAdiciona]=useState([...listaDeDados])
    // const adiconarProduto=()={
    //     const produtoAdicionado =[...listaDeDados,produto]
    //     setAdicionado(e.target.value)
    // }
 
    //  console.log(adiciona)
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
            
                  <Btn >
                    Adicionar ao Carrinho
                    </Btn> 
               </CardBtn>    
          </Card>
          {/* { onClick={() => aoCarrinho(produto)} } */}
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
export default Homee;