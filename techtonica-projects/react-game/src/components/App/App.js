//component imports
import React, { useState } from "react"
import StartMenu from "../StartMenu";
import TownHall from "../TownHall";
import Store from "../Store";
import Battle from "../Battle";
import Cave from "../Cave";
import Player from "../Player";


//useState that sets game modes bases on onClick event handler
function App() {
  const [mode, setMode] = useState("start")


  return (
    <>
    <Player/>
    {mode === 'start' && <StartMenu onStartClick={() => setMode("townHall")}/>}

    {mode === 'townHall' && <TownHall onStoreClick={() => setMode("store")} onBattleClick={() => setMode("battle")} onCaveClick={() => setMode("cave")}/>}

    {mode === 'store' && <Store onReturnClick={() => setMode("townHall")}/>}

    {mode === 'battle' && <Battle onReturnClick={() => setMode('townHall')}/>}

    {mode === 'cave' && <Cave onReturnClick={() => setMode('townHall')}/>}
   
    </>
  );
}

export default App;
