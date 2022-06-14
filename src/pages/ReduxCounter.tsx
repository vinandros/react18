import React from 'react'
import { RootState } from "../redux/store";
import { decrement, increment, incrementByAmount } from '../redux/reducers/counterReducer'
import { useAppDispatch, useAppSelector } from '../hooks/redux';

function ReduxCounter() {
    const count = useAppSelector((state: RootState) => state.counter.value)
    const dispatch = useAppDispatch()
    
    return (
        <div>
            <h1>Redux toolkit counter {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button> | {" "}
            <button onClick={() => dispatch(decrement())}>Decrement</button> | {" "}
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    )
}

export default ReduxCounter