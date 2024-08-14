import React, { useState } from "react"
import "./App/App.css"

 const StartMenu = ({ onStartClick }) => {
    return (
        <div className="button-container">
        <button className="startButton" onClick={onStartClick} >Start Game</button>
        </div>
    )
}

export default StartMenu