import { useCallback, useState} from "react";

export function UseCallbackCounter({initialValue = 0}) {
    const[counter,setCounter] = useState(initialValue);

    const handleIncrement = useCallback(function increment () {
        setCounter(c => c+1)
    },[]);

    const handleDecrment = useCallback(function decrement () {
        setCounter(c => c-1)
    },[]);

    const handleReset = useCallback(function reset () {
        setCounter(c => initialValue)
    },[initialValue])


    
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button  onClick={handleIncrement}>Increment</button>
            <button  onClick={handleDecrment} >Decrement</button>
            <button  onClick={handleReset} >Reset</button>
        </div>
    )
}