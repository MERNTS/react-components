import { useState } from 'react'

function App() {
  const [count, setCount] = useState(100);
  const increment = () =>{
      setCount(count + 1);
  }

  return (
    <>
        <p>Count: {count}</p>
        <button onClick={increment}>Incrementing</button>
    </>
  )
}

export default App
