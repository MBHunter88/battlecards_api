import React, { useState } from "react"
import Player from "./Player"
import Cave from "./Cave"

const Store = ({ onReturnClick, gold, setGold, inventory, setInventory, health, setHealth }) => {
  //set state to update weapons in inventory
  const [weaponLevel, setWeaponLevel] = useState(1)

  //set state to update TextModal and Player when action is performed 

  //weapons inventory, each weapon has a level that can only be bought in ascending order
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
  //create an array of weapon names using map to access names in the updated states
  const weaponNames = weapons.map(weapon => weapon.name)
  console.log(weaponNames)
  //create an array of weapon power using map to access power in the updated states
  const weaponPower = weapons.map(weapon => weapon.power)
  console.log(weaponPower)

  //function to buy items from store 
  const buyItem = () => {
    //set alert if not enough gold, weapons start at 30 gold
    if (gold < 30) {
      alert("Not enough gold")
    } else
      setGold(gold - 30)
    // Add the weapon at the current weaponLevel to the inventory
    const newWeapon = weaponNames[weaponLevel];
    setInventory([...inventory, newWeapon]);
    console.log(newWeapon)
    // Increment weaponLevel to make the next weapon available
    setWeaponLevel(weaponLevel + 1);


  }

  //function to sell items in store
  const sellItem = () => {
    //if there are no item in iventory set alert
    if (inventory.length === 0) {
      alert('No items to sell')
    } else
      setGold(gold + 15); // Add gold 
    const updatedInventory = [...inventory];
    updatedInventory.pop(); // Remove last item from inventory
    setInventory(updatedInventory);
  }

  //function to buy health in store
  const buyHealth = () => {
    //check for sufficient gold
    if (gold < 10) {
      alert("Not enough gold")
    } else
      setGold(gold - 10) //decrement gold
    setHealth(health + 10) //add health
  }

  //add onClick to "buyItem" button to subtract gold and upgrade the inventory to hold current weapon 
  //add onClick to "SellItem" button to add gold and upgrade invemtory to hold current weapon
  //add onClick to "buyHealth" button in increment health for set amount of gold
  return (
    <>
      <p>Welcome to the store!</p>
      <div className="button-container">
        <button onClick={buyHealth}>Buy (10) Health</button>
        <button onClick={buyItem}>Buy weapon</button>
        <button onClick={sellItem}>Sell weapon</button>
        <button onClick={onReturnClick}>Return to Town Hall</button>
      </div>
      <Cave weaponNames={weaponNames} weaponPower={weaponPower} />
    </>
  )
}

export default Store