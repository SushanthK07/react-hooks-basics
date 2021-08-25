import React, {useReducer} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const CountContext = React.createContext();

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


function AppComp() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{count: count, dispatch: dispatch}}>
            <div>
                <h2>Count: {count}</h2>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
    )
}

export default AppComp
