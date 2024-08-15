import React, { useState } from "react"
import "./App/App.css"

const StartMenu = ({ onStart }) => {
    return (
        <>
        <h1>Welcome! Press Start to begin.</h1>
        <div className="button-container">
        <button onClick={onStart}>Start Game</button>
      </div>
      </>
    );
  };
  
  export default StartMenu;
  