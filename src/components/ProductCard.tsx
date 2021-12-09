import { CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductButtons from './ProductButtons';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from '../context/ProductContext';
import { useProduct } from '../hooks/useProduct';
import { InitialValuesI, OnChangeArgsI, ProductCardHandlersI } from '../interfaces/interfaces';


interface PropsI {
    // children?: ReactElement | ReactElement[],
    children: ( args: ProductCardHandlersI )=> JSX.Element,
    product?: ProductI,
    className?: string,
    style?: CSSProperties,
    onChange?: (args: OnChangeArgsI)=> void,
    value?: number,
    initialValues?: InitialValuesI
}

interface ProductI{
    id: string,
    title: string,
    image?: string,
    count?: number
}

const productDefault = {
    id: '1',
    title: 'No Title',
    image: noImage
}

export default function ProductCard({ children, product = productDefault, className, style, value, initialValues }:PropsI) {
    const { Provider } = ProductContext;
    const {counter, handleClick, maxCount, isMaxCountReached, reset} = useProduct({
        product,
        value,
        initialValues
    });

    return ( 
        <Provider value={{
            counter,
            handleClick,
            maxCount,
            product
        }}>
            <div  className={`${styles.productCard} ${className}`} style={style || {}}>
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount,
                        product,
                        handleClick,
                        reset
                    }) 
                }
            </div>
        </Provider>
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;