import { useState } from "react";
import "./Emoji.css"
import Atributo from "../../components/Atributo/Atributo";
import  "../../components/Personagem/Personagem.css";
const LIFE = new Map<number, string>([
  [0, "💓"],
  [1, "💓💓"],
  [2, "💓💓💓"],
  [3, "💓💓💓💓"]
]);


const FOOD = new Map<number, string>([
  [0, "🍲"],
  [1, "🍲🍲"],
  [2, "🍲🍲🍲"],
  [3, "🍲🍲🍲🍲"]
]);

const ENERGY = new Map<number, string>([
  [0, "🔋"],
  [1, "🔋🔋"],
  [2, "🔋🔋🔋"],
  [3, "🔋🔋🔋🔋"]
]);

export default function Emoji() {

  const [vida, setVida] = useState(0);
  const [comida, setComida] = useState(0);
  const [energia, setEnergia] = useState(0);

  function toDrink() {
    if (vida < 3){
      setVida(vida + 1);
    }
  }

  function toEat() {
    if (comida < 3){
    setComida(comida + 1); 
  }
  }

  function toHeal() {
    if (energia < 3){
      setEnergia(energia + 1);
    }  
  }

  function onCiclo(){
    setComida(comida -1);
    setVida(vida -1);
    setEnergia(energia -1);
  }

  return (
    <div className="divPai">
      <div className="container">
      <div className="boneco"></div>
      <div className="emoji">
         
        <div className="atributos">
        <Atributo icone="❤️"/>
        </div>

        <div className="atributos">
        <Atributo icone="⚡"/>
        </div>

        <div className="atributos">
        <Atributo icone="🍔"/>
        </div>
        </div>
    
      </div>
    </div>
  );
}
