import React, { useState } from "react"

 const Cave = ({ onReturnClick }) => {
    return (
        <>
        <p>Lets find treasure!</p>
        <button onClick={onReturnClick}>Return to Town Hall</button>
        </>
    )
}

export default Cave