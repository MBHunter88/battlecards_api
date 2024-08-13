import React, { useState } from "react"

 const Store = ({ onReturnClick, onBuyWeaponClick, onSellWeaponClick}) => {

    return (
        <>
        <p>Welcome to the store!</p>
        <button>Buy weapon</button>
        <button>Sell weapon</button>
        <button onClick={onReturnClick}>Return to Town Hall</button>
        </>
    )
}

export default Store