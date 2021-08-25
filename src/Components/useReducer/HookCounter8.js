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

function HookCounter8() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);
    return (
        <div>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={() => dispatch('Decrement')}>Decrement</button>
                <button onClick={() => dispatch('Reset')}>Reset</button>
                <button onClick={() => dispatch('Increment')}>Increment</button>
            </div>
            <div>
                <h2>Count2: {count2}</h2>
                <button onClick={() => dispatch2('Decrement')}>Decrement</button>
                <button onClick={() => dispatch2('Reset')}>Reset</button>
                <button onClick={() => dispatch2('Increment')}>Increment</button>
            </div>
        </div>
    )
}

export default HookCounter8
