import React, { useState } from "react"

 const Cave = ({ onReturnClick }) => {
    return (
        <>
        <p>Win gold by defeating the monsters!</p>
        <button>Fight Slime</button>
        <button>Fight Fanged Beast</button>
        <button onClick={onReturnClick}>Return to Town Hall</button>
        </>
    )
}

export default Cave