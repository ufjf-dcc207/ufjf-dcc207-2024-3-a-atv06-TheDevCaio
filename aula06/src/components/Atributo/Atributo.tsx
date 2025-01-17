import { useState } from "react";
import "./Atributo.css";

type AtributoProps = {
    icone: string, 
    ciclo: boolean;
};



export default function Atributo({icone , ciclo }: AtributoProps){
    const [valor, setValor] = useState(0);
    const [vida, setVida] = useState(0);
    const [comida, setComida] = useState(0);
    const [energia, setEnergia] = useState(0);
    function onValueUp() {

        if(valor === 5){
            setValor(0);

        } else if(valor >= 1 && ciclo == true){
            setVida(vida - 1);
            setComida(comida - 1);
            setEnergia(energia - 1);
        }

         else  { 
            setValor(valor + 1);
            switch(icone){
                case '❤️': setVida(vida + 1);
                setValor(valor-1);
                break;
                case '⚡': setEnergia(energia +1);
                break;
                case '🍔': setComida(vida + 1);
            }

        } 



    }

    return(
        <div className ="atributo">
            <span className="ativo">{icone.repeat(valor)}</span>
            <span className="inativo">{icone.repeat(5- valor)}</span>
            <button onClick={onValueUp} className="estiloBtn">+</button>
        </div>
    )
}