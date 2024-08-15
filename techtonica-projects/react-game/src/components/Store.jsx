import React, { useState } from "react"
import "./App/App.css"

const Store = ({ onReturnClick, health, setHealth, gold, setGold, inventory, setInventory, currentWeapon, setCurrentWeapon }) => {


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


  //buy items from store to add to inventory
  const buyItem = () => {
    const nextWeapon = currentWeapon + 1 //initialize nextWeapon in the weapons arr
    if (nextWeapon < weapons.length && gold >= 30) { //make sure last weapon is not already in inventory and has sufficient gold
      setGold(gold - 30);
      setInventory([...inventory, weapons[nextWeapon]]) //update inventory state to include nextWeapon
      setCurrentWeapon(nextWeapon); //update weapon state to current weapon
    } else if (nextWeapon >= weapons.length) { //check if all weapons have been purchased
      alert("You have purchased all the available weapons")
    } else { //alert if not enough gold
      alert("Not enough gold!")
    }
  };

  //sell (remove) items from inventory 
  const sellItem = () => {
    if (inventory.length > 0) { //make sure there is at least one item to sell
      const lastItem = inventory.pop() // remove the last item from inventory
      setGold(gold + 15); //sell item for half the cost of original price
      setInventory([...inventory]); //update inventory state
      setCurrentWeapon(currentWeapon - 1) //decrement the currentWeapon by 1 to get previous weapon
    } else {
      alert("No items to sell!")
    }
  }

  //buy health for set amount of gold
  const buyHealth = () => {
    if (gold >= 10) {
      setGold(gold - 10)
      setHealth(health + 10)
    } else {
      alert("Not enough gold!")
    }
  }


  return (
    <>
      <p>Welcome to the store!</p>
      <div className="button-container">
        <button onClick={buyItem}>Buy {weapons[currentWeapon].name}</button>
        <button onClick={buyHealth}>Buy Health (10 Gold)</button>
        <button onClick={sellItem}>Sell Weapon</button>
      </div>
      <div className="return-container">
        <button onClick={onReturnClick}>Return to Town Hall</button>
      </div>

    </>
  )
}

export default Store