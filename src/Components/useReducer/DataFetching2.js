import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {},
};

const reducer = (currentState, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload,
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something went wrong',
                post: {},
            };
        default:
            return currentState;
    }
};

function DataFetching2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {loading, error, post} = state;

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => dispatch({type: 'FETCH_SUCCESS', payload: response.data}))
            .catch(error => dispatch({type: 'FETCH_ERROR'}));
    }, [])

    return (
        <div>
            <h2>{loading ? 'Loading' : post.title}</h2>
            <h3>{error ? error : null}</h3>            
        </div>
    )
}

export default DataFetching2
