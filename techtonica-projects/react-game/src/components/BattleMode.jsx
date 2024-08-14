import React, { useState } from 'react';

const BattleMode = ({health, setHealth, inventory, setInventory, gold, setGold}) => {
const [fightMode, setfightMode] = useState("")
const [attack, setAttack] = useState("")
//const takeDamage = (damage) => setHealth(health - damage); 
//const addGold = (amount) => setGold(gold + amount); 
//functions for attack, defend/dodge and for missing/landing hits
const playerAttack = () => {
    if(setAttack) {
alert("You attacked....")
    }
    
}
//function to calculate the attack from the monster
//
    return (
        <>
        
        </>
    )
}

export default BattleMode