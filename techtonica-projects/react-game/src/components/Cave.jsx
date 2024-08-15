import React, { useState } from "react"
import "./App/App.css"

const Cave = ({ onReturnClick, health, setHealth, gold, setGold, inventory, setInventory, xp, setXp, currentWeapon }) => {
    const caveEnemies = [
        { name: 'Sludger', power: 2, health: 15 },
        { name: 'Murloc', power: 8, health: 60 },
    ];
    const [isFighting, setIsFighting] = useState(false);
    const [enemy, setEnemy] = useState(caveEnemies[0]);

    //function to hold logic for player attack
    const playerAttack = () => {

    };

    //helper function to get enemy attack value
    const enemyAttackValue = () => {

    };

    //helper function to determine if the player hits enemy
    const isEnemyHit = () => {

    };

    //helper function to determine when enemy is defeated
    const enemyDefeated = () => {

    };

    // helper function to determine when player is defeated
    const lossFight = () => {

    }


    return (

        <>
            <h1>Cave</h1>
            <p>Health: {health}</p>
            <p>Gold: {gold}</p>
            {isFighting ? (
                <>
                    <p>Enemy: {enemy.name} (Health: {enemy.health})</p>
                    <div className="button-container">
                        <button onClick={playerAttack}>Attack</button>
                        <button onClick={() => setIsFighting(false)}>Run</button>
                    </div>
                </>
            ) : (
                <>
                    <div className="button-container">
                        <button onClick={() => setIsFighting(true)}>Fight Sludger</button>
                        <button onClick={() => setIsFighting(true)}>Fight Murloc</button>
                    </div>
                    <div className="return-container">
                        <button onClick={onReturnClick}>Return to Town Hall</button>
                    </div>
                </>
            )}

        </>
    );

}
export default Cave