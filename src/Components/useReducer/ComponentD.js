import React, {useContext} from 'react'
import { CountContext } from './AppComp'

function ComponentD() {
    const countContext = useContext(CountContext);
    const {count, dispatch} = countContext;
    return (
        <div>
            <h3>Component D Count {count}</h3>
            <button onClick={() => dispatch('Decrement')}>Decrement</button>
            <button onClick={() => dispatch('Reset')}>Reset</button>
            <button onClick={() => dispatch('Increment')}>Increment</button>
        </div>
    )
}

export default ComponentD
