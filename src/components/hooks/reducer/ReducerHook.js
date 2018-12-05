import React, { useReducer } from 'react';

const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return state;
    }
};

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <React.Fragment>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </React.Fragment>
    )
}