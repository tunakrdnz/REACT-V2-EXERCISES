import { useCounter } from "./useCounter";

export function HookCounter({initialValue}) {
    const{counter,  increment, decrement, reset} = useCounter(initialValue);
    
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button name='' onClick={increment}>Increment</button>
            <button name='' onClick={decrement} >Decrement</button>
            <button name='' onClick={reset} >Reset</button>
        </div>
    )
}