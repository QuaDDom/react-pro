import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import styles from '../styles/styles.module.css'

export default function ProductButtons() {
    const { counter, handleClick } = useContext(ProductContext);
    
    return (
    <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={()=>handleClick('decrease')}>-</button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={()=>handleClick('increase')}>+</button>
    </div>
    )
}
