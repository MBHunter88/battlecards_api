import React, { useState } from 'react';
import "./App/App.css"


//define Player
const Player = () => {

  //initialize all Player stats
  const [health, setHealth] = useState(100);
  const [gold, setGold] = useState(50);
  const [inventory, setInventory] = useState([]);
  const [xp, setXp] = useState(0);
  const [currentWeapon, setCurrentWeapon] = useState(0);

  return {
    health,
    setHealth,
    gold,
    setGold,
    inventory,
    setInventory,
    xp,
    setXp,
    currentWeapon,
    setCurrentWeapon,
  };
};

export default Player;
