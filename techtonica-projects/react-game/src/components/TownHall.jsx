import React, { useState } from "react"
import "./App/App.css"

const TownHall = ({ onEnterCave, onEnterStore, onEnterDragonFight, onReturnToStart }) => {
  return (
    <>
    <h1>Town Hall</h1>
    <div className="button-container">
      <button onClick={onEnterCave}>Enter Cave</button>
      <button onClick={onEnterStore}>Enter Store</button>
      <button onClick={onEnterDragonFight}>Fight the Dragon</button>
    </div>
    <div className="return-container">
    <button onClick={onReturnToStart}>Return to Start Menu</button>
    </div>
    </>
  );
};

export default TownHall;
