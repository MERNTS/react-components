import { useReducer } from 'react';

function countReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

function App() {
    const [state, dispatch] = useReducer(countReducer, { count: 100 });

    const increment = () => {
        dispatch({ type: 'increment' });
    };

    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={increment}>Incrementing</button>
        </>
    );
}

export default App;
