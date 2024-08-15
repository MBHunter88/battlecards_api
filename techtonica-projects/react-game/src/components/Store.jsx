import React, { useState } from "react"
import "./App/App.css"

const Store = ({onReturnClick, health, setHealth, gold, setGold, inventory, setInventory, currentWeapon, setCurrentWeapon }) => {
  

  //weapons inventory
  const weapons = [
    {
      name: "Stick",
      power: 5
    },
    {
      name: "Dagger",
      power: 30
    },
    {
      name: "Claw-hammer",
      power: 50
    },
    {
      name: "Sword",
      power: 100
    }
  ]

 
  //function to buy items from store 
  const buyItem = (index) => {
   
  };

  //function to sell items in store
  const sellItem = () => {
    
  }

  //function to buy health in store
  const buyHealth = () => {
   
  }

  
  return (
    <>
      <p>Welcome to the store!</p>
      <div className="button-container">
      <button onClick={() => buyItem(currentWeapon)}>Buy {weapons[currentWeapon].name}</button>
      <button onClick={() => setHealth(health + 10)}>Buy Health (10 Gold)</button>
      <button onClick={() => setCurrentWeapon(0)}>Sell Weapon</button>
      </div>
      <div className="return-container">
      <button onClick={onReturnClick}>Return to Town Hall</button>
      </div>
  
    </>
  )
}

export default Store