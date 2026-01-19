import { useState } from "react"
import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  
  return <>
    <h3>{count}</h3>
    <button onClick={handleClick} className={styles.button}>ADD</button>
  </>
}
