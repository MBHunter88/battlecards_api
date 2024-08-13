import React, { useState } from "react"
import Player from "./Player"

const Store = ({ onReturnClick, gold, setGold, inventory, setInventory, health, setHealth }) => {
  //set state to update weapons in inventory
  const [weaponLevel, setWeaponLevel] = useState(0)
  //set state to update TextModal and Player when action is performed 
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
  //create an array on names using map to access names in the updated states
  const weaponNames = weapons.map(weapon => weapon.name)
  console.log(weaponNames)
 

  const buyItem = () => {
 //set alert if not enough gold, weapons start at 30 gold
    if (gold < 30) {
      alert("Not enough gold")
    } else
      setGold(gold - 30)
    // Add the weapon at the current weaponLevel to the inventory
    const newWeapon = weaponNames[weaponLevel];
    setInventory([...inventory, newWeapon]);

    // Increment weaponLevel to make the next weapon available
    setWeaponLevel(weaponLevel + 1);


  }

  const sellItem = () => {
    if (inventory.length === 0) {
      alert('No items to sell')
    } else
      setGold(gold + 15); // Add gold (assuming selling gives half the gold back)
     const updatedInventory = [...inventory];
    updatedInventory.pop(); // Remove last item from inventory
    setInventory(updatedInventory);

  }

  const buyHealth = () => {
    if (gold < 10) {
      alert("Not enough gold")
    } else
    setGold(gold - 10)
    setHealth(health + 10)
  }
  
  //add onClick to "Buy Weapon" button to subtract gold and upgrade the inventory to hold current weapon 
  //add onClick to "Sell Weapon" button to add gold and upgrade invemtory to hold current weapon
  return (
    <>
      <p>Welcome to the store!</p>
      <button onClick={buyHealth}>Buy (10) Health</button>
      <button onClick={buyItem}>Buy weapon</button>
      <button onClick={sellItem}>Sell weapon</button>
      <button onClick={onReturnClick}>Return to Town Hall</button>
    </>
  )
}

export default Store