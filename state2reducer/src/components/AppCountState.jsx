import { useState } from 'react';

function App() {
    const [state, setState] = useState( 100 );

    function handleInc() { setState(state+1);}
    function handleDec(){ setState(state-1);}

    return (
        <>
            <p>Count</p>
            Count: {state}
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </>
    );
}

export default App;
