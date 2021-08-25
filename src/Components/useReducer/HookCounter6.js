import React, {useReducer} from 'react'

const initialState = 0;

const reducer = (currentState, action) => {
    let newState;    
    switch(action) {
        case 'Increment':
            newState = currentState + 1;
            break;
        case 'Reset':
            newState = initialState;
            break;
        case 'Decrement':
            newState = currentState - 1;
            break;
        default:
            newState = currentState;
            break;
    }
    return newState;
}

function HookCounter6() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch('Decrement')}>Decrement</button>
            <button onClick={() => dispatch('Reset')}>Reset</button>
            <button onClick={() => dispatch('Increment')}>Increment</button>
        </div>
    )
}

export default HookCounter6
