import React from 'react'

export function Sum ({numbers}) {
    const sum = numbers.reduce( (a,b) => a+b );
    return (
        <h1>Sum of the numbers is {sum}</h1>
    )
}