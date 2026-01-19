import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0);

  return <>
    <h3>{count}</h3>
    <button onClick={() => setCount(prev => prev + 1)}>add</button>
  </>
}