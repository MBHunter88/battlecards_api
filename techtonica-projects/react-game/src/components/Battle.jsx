import React, { useState } from "react"

 const Battle = ({ onReturnClick }) => {
    return (
        <>
        <p>Lets fight!</p>
        <button onClick={onReturnClick}>Return to Town Hall</button>
        </>
    )
}

export default Battle