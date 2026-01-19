import { useState } from "react"
import './Counter.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  
  return <>
    <h3>{count}</h3>
    <button onClick={() => setCount(prev => prev + 1)}>add</button>
  </>
}