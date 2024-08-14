import React, { useState } from "react"

 const Cave = ({ onReturnClick }) => {
//const addGold = (amount) => setGold(gold + amount); //when defeating monsters of dragon (<Cave/>/<Battle/>)
//const takeDamage = (damage) => setHealth(health - damage); //when fighting monsters or dragon((<Cave/>/<Battle/>)


    return (
        <>
         <p>Win gold by defeating the monsters!</p>
        <div className="button-container">
        <button>Fight Slime</button>
        <button>Fight Fanged Beast</button>
        <button onClick={onReturnClick}>Return to Town Hall</button>
        </div>
        </>
    )
}

export default Cave