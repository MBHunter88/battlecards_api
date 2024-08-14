import React, { useState } from "react"

 const DragonFight = ({ onReturnClick }) => {
//const takeDamage = (damage) => setHealth(health - damage); //when fighting monsters or dragon((<Cave/>/<Battle/>)
//const addGold = (amount) => setGold(gold + amount); //when defeating monsters of dragon (<Cave/>/<Battle/>)

    return (
        <>
         <p>Defeat the dragon and save the townspeople!</p>
        <div className="button-container">
        <button>Attack</button>
        <button>Dodge</button>
        <button onClick={onReturnClick}>Run</button>
        </div>

        </>
    )
}

export default DragonFight