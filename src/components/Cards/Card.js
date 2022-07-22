import { CardContainer, CardFooter } from "./style";
import {listaProdutos} from './MockDeDados'

function Card(props) {
   return <CardContainer>
      <h2 title={props.produto.title}>
         &#127919; <u >{props.produto.title} </u>
      </h2>
      <CardFooter>
         <span> R$ {props.price.toFixed(2).replace(".", ",")}</span>
      </CardFooter>
   </CardContainer>
}

export default Card;