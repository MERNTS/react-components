import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Counter</h1>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "INC" })}>+</button>
            <button onClick={() => dispatch({ type: "DEC" })}>-</button>
        </div>
    );
}

export default Counter;