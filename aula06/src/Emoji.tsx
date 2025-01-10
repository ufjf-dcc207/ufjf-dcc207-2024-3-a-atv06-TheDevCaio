import { useState } from "react";
import "./Emoji.css"

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

  return (
    <div className="divPai">
      <div className="emoji">
        
        <div className="situacao">{LIFE.get(vida)}</div>
        <div className="acoes">
          <button onClick={toDrink}>Ganhar energia</button>
        </div>

        <div className="situacao">{FOOD.get(comida)}</div>
        <div className="acoes">
          <button onClick={toEat}>Ganhar comida</button>
        </div>

        <div className="situacao">{ENERGY.get(energia)}</div>
        <div className="acoes">
        <button onClick={toHeal}>Ganhar energia</button>
        </div>
        
      </div>
    </div>
  );
}
