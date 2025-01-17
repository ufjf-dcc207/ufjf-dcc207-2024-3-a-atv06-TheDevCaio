import { useState } from "react";
import "./Atributo.css";

type AtributoProps = {
    ligado: boolean;
};



export default function Luz({ligado}: AtributoProps){
  
if(ligado == true){
    return(
        <div className ="aceso">
    
        </div>
    )
    
} else {

    <div className ="apagado">
    
    </div>

}

}