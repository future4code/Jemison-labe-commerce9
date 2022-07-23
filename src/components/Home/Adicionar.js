import React,{useState} from "react";

 function Adicionar(){
    const[contador,setContador]=useState(0);
    function incrementarContador(){
        contador= contador+1;
        setContador(contador);
    }
    return(
    <div>
        
    </div>
    )
}

export default Adicionar;