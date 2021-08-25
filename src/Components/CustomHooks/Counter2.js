import React from 'react'
import useCounter from './useCounter';

function Counter2() {
    const [count, increment, decrement, reset] = useCounter(10, 5);
    
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter2
