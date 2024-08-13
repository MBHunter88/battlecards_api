import React, { useState } from "react"

 const StartMenu = ({ onStartClick }) => {
    return (
        <>
        <button onClick={onStartClick} >Start Game</button>
        </>
    )
}

export default StartMenu