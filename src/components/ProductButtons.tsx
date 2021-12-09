import { CSSProperties, useCallback, useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext';
import styles from '../styles/styles.module.css'

interface ProductsI{
    className?: string,
    style?: CSSProperties,
}

export default function ProductButtons({ className, style }: ProductsI) {
    const { counter, handleClick, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )

    return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style || {}} >
        <button className={styles.buttonMinus} onClick={()=>handleClick(-1)}>-</button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={()=>handleClick(+1)}>+</button>
    </div>
    )
}