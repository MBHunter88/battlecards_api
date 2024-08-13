import React, { useState } from "react"
import "./App/App.css"

 const TownHall = ({ onStoreClick, onCaveClick, onBattleClick}) => {


    return (
        <>
        <p>Welcome to the TownHall</p>
        <button onClick={onStoreClick}>Go to store</button>
        <button onClick={onCaveClick}>Go to cave</button>
        <button onClick={onBattleClick}>Fight Dragon</button>
        </>
    )
}

export default TownHall