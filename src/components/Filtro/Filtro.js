import React,{useState} from "react";

import { DigitaFiltro } from "./style";

export function Filters(props){
    return(
        <DigitaFiltro>
            <input 
            placeholder="Nome do produto"
            value={props.nome}
            onChange={(ev)=>{props.setNome(ev.target.value)}}
            />
             <input 
            placeholder="Valor Mínimo"
            type="number"
            value={props.valorMin}
            onChange={(ev)=>{props.setValorMin(ev.target.value)}}
            />
             <input 
            placeholder="Valor Máximo"
            type="number"
            value={props.valorMax}
            onChange={(ev)=>{props.setValorMax(ev.target.value)}}
            />
        </DigitaFiltro>
    )
}