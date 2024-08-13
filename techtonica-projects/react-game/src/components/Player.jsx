import React, { useState } from 'react';

function Player({ gold, inventory }) {
    //set defaults for player health, gold and weapon
// const [health, setHealth] = useState(100);
// const [gold, setGold] = useState(50);
// const [inventory, setInventory] = useState([]);

//initialize functions that update player state
//const takeDamage = (damage) => setHealth(health - damage); //when fighting monsters or dragon((<Cave/>/<Battle/>)
  //const addGold = (amount) => setGold(gold + amount); //when defeating monsters of dragon (<Cave/>/<Battle/>)
 //const addItem = (item) => setInventory([...inventory, item]); //when buying items in store(<Store/>)

  return (
    <div>
      <h2>Player Stats</h2>
      <p>Health: 100</p>
      <p>Gold: {gold}</p>
      <p>Inventory: {inventory.join(',') || "Empty"}</p>
    </div>
  );
}

export default Player;