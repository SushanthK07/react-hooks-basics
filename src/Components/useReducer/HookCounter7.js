import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};

const reducer = (currentState, action) => {
    const newState = {...currentState};
    switch(action.type) {
        case 'Increment':
            newState.firstCounter = currentState.firstCounter + action.value;
            break;
        case 'Reset':
            newState.firstCounter = initialState.firstCounter;
            break;
        case 'Decrement':
            newState.firstCounter = currentState.firstCounter - action.value;
            break;
        
        case 'Increment2':
            newState.secondCounter = currentState.secondCounter + action.value;
            break;
        case 'Reset2':
            newState.secondCounter = initialState.secondCounter;
            break;
        case 'Decrement2':
            newState.secondCounter = currentState.secondCounter - action.value;
            break;
        default:
            break;
    }
    return newState;
}

function HookCounter7() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>
                <h2>First Counter: {count.firstCounter}</h2>
                <button onClick={() => dispatch({type: 'Decrement', value: 5})}>Decrement 5</button>
                <button onClick={() => dispatch({type: 'Decrement', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
                <button onClick={() => dispatch({type: 'Increment', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'Increment', value: 5})}>Increment 5</button>
            </div>
            <div>
                <h2>Second Counter: {count.secondCounter}</h2>
                <button onClick={() => dispatch({type: 'Decrement2', value: 5})}>Decrement 5</button>
                <button onClick={() => dispatch({type: 'Decrement2', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'Reset2'})}>Reset</button>
                <button onClick={() => dispatch({type: 'Increment2', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'Increment2', value: 5})}>Increment 5</button>
            </div>
        </div>
    )
}

export default HookCounter7
