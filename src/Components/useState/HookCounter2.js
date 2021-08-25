import React, {useState} from 'react'

function HookCounter2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default HookCounter2
