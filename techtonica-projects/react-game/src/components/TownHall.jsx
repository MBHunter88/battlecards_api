import React, { useState } from "react"
import "./App/App.css"

const TownHall = ({ onEnterCave, onEnterStore, onEnterDragonFight, onReturnToStart }) => {
  return (
    <>
    <h1>Town Hall</h1>
    <p>This is the heart of your journey. From here, you can prepare for the battles ahead, 
      restock your supplies, or face your greatest challenge.</p>
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
