import {useState} from 'react'

function useCounter(initialCount = 0, value = 1) {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount(count + value);
    const reset = () => setCount(initialCount);
    const decrement = () => setCount(count - value);

    return [count, increment, decrement, reset];
}

export default useCounter
