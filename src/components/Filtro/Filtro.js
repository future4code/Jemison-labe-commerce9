import React from "react";
import { ContainerFiltro } from "./style";

export function Filters(props){
    return(
        <ContainerFiltro>
            <h3>Filtros</h3>
            <p>Escolha sua camisa</p>
            <input 
            placeholder=""
            value={props.nome}
            onChange={(ev)=>{props.setNome(ev.target.value)}}
            />
            <p>Valor mínimo</p>

             <input 
            placeholder=""
            type="number"
            value={props.valorMin}
            onChange={(ev)=>{props.setValorMin(ev.target.value)}}
            />

            <p>Valor máximo</p>
             <input 
            placeholder=""
            type="number"
            value={props.valorMax}
            onChange={(ev)=>{props.setValorMax(ev.target.value)}}
            />
        </ContainerFiltro>
    )
}