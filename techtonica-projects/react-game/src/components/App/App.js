//component imports
import React, { useState } from "react"
import StartMenu from "../StartMenu";
import TownHall from "../TownHall";
import Store from "../Store";
import Battle from "../Battle";
import Cave from "../Cave";
import Player from "../Player";



function App() {
  //useState that sets game modes and stats based on onClick event handler
  const [mode, setMode] = useState("start")
  const [health, setHealth] = useState(100);
  const [gold, setGold] = useState(60)
  const [inventory, setInventory] = useState([])
  

  return (
    <>
    < Player gold={gold} setGold={setGold} inventory={inventory} setInventory={setInventory} health={health} setHealth={setHealth} />
    {mode === 'start' && <StartMenu onStartClick={() => setMode("townHall")}/>}

    {mode === 'townHall' && <TownHall onStoreClick={() => setMode("store")} onBattleClick={() => setMode("battle")} onCaveClick={() => setMode("cave")}/>}

    {mode === 'store' && <Store onReturnClick={() => setMode("townHall")}
     gold={gold} setGold={setGold} 
    inventory={inventory} setInventory={setInventory}
    health={health} setHealth={setHealth}
    />}

    {mode === 'battle' && <Battle onReturnClick={() => setMode('townHall')}/>}

    {mode === 'cave' && <Cave onReturnClick={() => setMode('townHall')}/>}
   
    </>
  );
}

export default App;
