import React, { useState } from 'react';
import Store from './Store';

const BattleMode = ({ health, setHealth, inventory, setInventory, gold, setGold }) => {
    const [fightMode, setfightMode] = useState("")
    const [attack, setAttack] = useState("")
    const [enemyHealth, setEnemyHealth] = useState()
    const [player, setPlayer] = useState()
    const [weapon, setWeapon] = useState()

    const enemies = [
        {name: "Sludger",
            powerLevel: 2,
            healthStat: 15
        },
        {name: "Murloc",
            powerLevel: 8,
            healthStat: 60
        },
        {name: "Dragon",
            powerLevel: 20,
            healthStat: 300
        }
    ]
    const enemyLevel = enemies.map(level => level.powerLevel)
   const currentWeapon = setInventory()
    //const takeDamage = (damage) => setHealth(health - damage); 
    //const addGold = (amount) => setGold(gold + amount); 
    //functions for attack, defend/dodge and for missing/landing hits
    let xp = 0;
    const playerAttack = () => {
        let newHealth = setHealth - enemyAttackValue(enemyLevel)
        if (isEnemyHit()) {
            const damage = inventory[currentWeapon].power + Math.floor(Math.random() * xp + 1)
            setEnemyHealth(enemyHealth - damage)
        } else {
            alert("You miss.")
        }
        setPlayer(newHealth)
        if(newHealth <= 0 ) {
            loseFight()
        } else if (enemyHealth <= 0) {
            fightMode === 2 ? winGame() : defeatEnemy()
        }
        setAttack(playerAttack())
    }
    

    const enemyAttackValue = (level) => {
        let hit = (level * 5) - (Math.floor(Math.random() * xp));
        return hit
    }

    const isEnemyHit = () => {
        return Math.random() > .2 || health < 20;
    
    }

    const dodge = () => {
        return alert("You dodge attack from...")

    }

    const defeatEnemy = () => {
        let addGold = (amount) => setGold(gold + amount); 
    }

    const loseFight = () => {

    }

    const winGame = () => {

    }
    //function to calculate the attack from the monster
    //
    return (
        <>

        </>
    )
}

//export default BattleMode