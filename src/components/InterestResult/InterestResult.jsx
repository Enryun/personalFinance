import React from 'react';


const InterestResult = ({result, saveAmount}) => {
    return (
        <>
            <h2>Original: {saveAmount} $</h2>
            <h2>Interest: {Math.round((result - saveAmount) * 100) / 100} $</h2>
            <h2>Total: {Math.round((result) * 100) / 100} $</h2>
        </>
    )
}

export default InterestResult;
