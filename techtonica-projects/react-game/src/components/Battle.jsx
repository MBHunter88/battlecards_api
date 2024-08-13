import React, { useState } from "react"

 const Battle = ({ onReturnClick }) => {
//


    return (
        <>
        <p>Defeat the dragon and save the townspeople!</p>
        <button>Attack</button>
        <button>Dodge</button>
        <button onClick={onReturnClick}>Run</button>
        </>
    )
}

export default Battle