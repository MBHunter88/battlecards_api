import React, { useState } from "react"
import "./App/App.css"

const DragonFight = ({ onReturnClick, health, setHealth, gold, setGold, inventory, setInventory, xp, setXp, currentWeapon }) => {
    const dragon = { name: 'Dragon', power: 20, health: 300 };
    const [isFighting, setIsFighting] = useState(false);

//use similar logic form Cave component

 const playerAttack = () => {

 }


    return (
        <>
       <h1>Dragon Fight</h1>
      <p>Health: {health}</p>
      <p>Gold: {gold}</p>
      {isFighting ? (
        <>
          <p>Dragon: {dragon.name} (Health: {dragon.health})</p>
          <div className="button-container">
          <button onClick={playerAttack}>Attack</button>
          <button onClick={() => setIsFighting(false)}>Run</button>
          </div>
        </>
      ) : (
        <div className="button-container">
        <button onClick={() => setIsFighting(true)}>Fight the Dragon</button>
        </div>
      )}
      <div className="return-container">
      <button onClick={onReturnClick}>Return to Town Hall</button>
      </div>
        </>
    )
}

export default DragonFight