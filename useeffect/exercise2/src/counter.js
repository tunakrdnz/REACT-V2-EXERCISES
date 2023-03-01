import {useEffect, useState} from 'react'


export function Counter () {
    const[counter, setCounter] = useState(0);

    useEffect(() => {
        const data = setInterval(() => {
            setCounter((c) => c+1)
        }, 1000);
        return () => {
            clearInterval(data)
        }

    })

    return(
        <div>
            <h1>Counter: {counter}</h1>
        </div>
    )
}