import { useState } from "react";
import "./Emoji.css"
import Atributo from "../../components/Atributo/Atributo";
import  "../../components/Personagem/Personagem.css";
import Luz from "../../components/DiaeNoite/DiaeNoite";


export default function Emoji() {
  function LuzAcao() {
    const [estado, setEstado] = useState(false);
  }

  return (
    <div className="divPai">
      <Luz ligado={true || false}></Luz>
      <button onClick={LuzAcao}></button>
      <div className="container">
        
      <div className="boneco"></div>
      <div className="emoji">
         
        <div className="atributos">
        <Atributo icone="❤️" ciclo={false}/>
        </div>

        <div className="atributos">
        <Atributo icone="⚡" ciclo={false}/>
        </div>

        <div className="atributos">
        <Atributo icone="🍔" ciclo={false}/>
        </div>

        <div className="ciclo">
          Ciclo
        </div>
        </div>
    
      </div>
    </div>
  );
}




