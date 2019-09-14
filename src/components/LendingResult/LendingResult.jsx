import React from 'react'

const LendingResult = ({principal, result, year}) => {
    return (
        <>
            {/* <h2>Principal:  {Math.round((principal) * 100) / 100} $</h2>
            <h2>Interest:  {Math.round((result) * 100) / 100} $</h2> */}
            <h2>Payment each month: {Math.round((result + principal) * 100) / 100} $</h2>
            <h2>Total Payment:  {(Math.round(((result + principal)*year*12) * 100) / 100)} $</h2>
        </>
    )
}

export default LendingResult
