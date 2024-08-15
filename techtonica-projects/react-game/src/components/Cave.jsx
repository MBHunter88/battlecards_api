import React, { useState } from "react"
import Store from "./Store";

const Cave = ({ onReturnClick, weaponNames, weaponPower }) => {
    const [health, setHealth] = useState(100);
    const [inventory, setInventory] = useState([{ name: "stick", power: 5 }]);
    const [gold, setGold] = useState(50);
    const [isFighting, setIsFighting] = useState(false)
    const [isWeapon, setIsWeapon] = useState(0)
    const [enemyHealth, setEnemyHealth] = useState(100)
    
    //player xp
    let xp = 0

    //arr for eneimies found in cave
    const caveEnemies = [
        {
            name: "Sludger",
            powerLevel: 2,
            healthStat: 15
        },
        {
            name: "Murloc",
            powerLevel: 8,
            healthStat: 60
        }
    ]

    //acc powerLevel in caveEnemies arr
    const enemyPowerLevel = caveEnemies.map(power => power.powerLevel)
    //console.log(enemyPowerLevel)

    //if enemy is hit based enemyHealth will decrease based on damage = random number generated for the powerLevel of the weapon and the current player xp
    const playerAttack = () => {
        if (isEnemyHit()) {
            const currentWeaponPower = weaponPower[isWeapon];
            const damage = currentWeaponPower + Math.floor(Math.random() * xp + 1);
            setEnemyHealth(prevHealth => prevHealth - damage);

            //player health will decrease based on the calcualted enemyAttackValue()
            const newHealth = health - enemyAttackValue(caveEnemies[0].powerLevel); 
            setHealth(newHealth);

            //if player health reaches 0 alert the player has been defeated else if the enemy health reaches 0 alert the enemy has been defeated 
            if (newHealth <= 0) {
                alert("You have been defeated!");
            } else if (enemyHealth - damage <= 0) {
                alert("Enemy defeated!");
            }
        } else { //if enenmy is not hit alert the attack missed
            alert("You miss.");
        }
    };


    const enemyAttackValue = (enemyPowerLevel) => {
        let hit = (enemyPowerLevel * 5) - (Math.floor(Math.random() * xp));
        return hit
    }
    const isEnemyHit = () => {
        return Math.random() > .2 || health < 20;

    }


    return (

        <>
            <p>Win gold by defeating the monsters!</p>
            <div className="button-container">
                {!isFighting ? (
                    <>
                        <button onClick={() => setIsFighting(true)}>Fight Sludger</button>
                        <button onClick={() => setIsFighting(true)}>Fight Murloc</button>
                        <button onClick={onReturnClick}>Return to Town Hall</button>
                    </>
                ) : (
                    <>

                        <button onClick={playerAttack}>Attack</button>
                        <button>Dodge</button>
                        <button onClick={() => setIsFighting(false)}>Run</button>
                    </>
                )}
            </div>
            <div className="enemyStats">
                <p>Enemy Health: {enemyHealth}</p>
            </div>
        </>
    );

}
export default Cave