import { CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductButtons from './ProductButtons';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from '../context/ProductContext';
import { useProduct } from '../hooks/useProduct';
import { OnChangeArgsI } from '../interfaces/interfaces';

interface PropsI {
    children?: ReactElement | ReactElement[],
    product?: ProductI,
    className?: string,
    style?: CSSProperties,
    onChange?: (args: OnChangeArgsI)=> void,
    value?: number
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

export default function ProductCard({ children, product = productDefault, className, style, onChange, value }: PropsI) {
    const { Provider } = ProductContext;
    const {counter, handleClick} = useProduct({
        onChange,
        product,
        value
    });

    return ( 
        <Provider value={{
            counter,
            handleClick,
            product
        }}>
            <div  className={`${styles.productCard} ${className}`} style={style || {}}>
                { children }
            </div>
        </Provider>
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;