import React, { useState } from "react"
import Player from "./Player"

const Store = ({ onReturnClick, gold, setGold, inventory, setInventory }) => {
    //set state to update TextModal and Player when action is performed 
    //weapons inventory
    const weapons = [
        {
          name: "stick",
          power: 5
        },
        {
          name: "dagger",
          power: 30
        },
        {
          name: "claw hammer",
          power: 50
        },
        {
          name: "sword",
          power: 100
        }
      ]
    //set alert if not enough gold, weapons start at 30 gold
    const buyItem = () => {
        if (gold < 30) {
            alert("Not enough gold")
        } else
        setGold(gold - 30)
        setInventory(weapons.reduce((acc, name) => acc + name, 0 ))
        // let currentWeapon = {setInventory}
        // currentWeapon++
    }

    const sellItem = () => {
        if(inventory.length === 0) {
            alert('No items to sell')
        } else
        setGold(gold + 15); // Add gold (assuming selling gives half the gold back)
        const updatedInventory = [...inventory];
        updatedInventory.pop(); // Remove last item from inventory
        setInventory(updatedInventory);

    }
    //create a items array that will hold weapons
    //add onClick to "Buy Weapon" button to subtract gold and upgrade the inventory to hold current weapon 
    //add onClick to "Sell Weapon" button to add gold and upgrade invemtory to hold current weapon
    return (
        <>
            <p>Welcome to the store!</p>
            <button onClick={buyItem}>Buy weapon</button>
            <button onClick={sellItem}>Sell weapon</button>
            <button onClick={onReturnClick}>Return to Town Hall</button>
        </>
    )
}

export default Store