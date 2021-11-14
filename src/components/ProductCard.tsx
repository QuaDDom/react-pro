import { ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import ProductTitle from './ProductTitle';
import ProductImage from './ProductImage';
import ProductButtons from './ProductButtons';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from '../context/ProductContext';
import { useProduct } from '../hooks/useProduct';

interface PropsI {
    children?: ReactElement | ReactElement[],
    product?: ProductI,
}

interface ProductI{
    id: string,
    title: string,
    image?: string,
}

const productDefault = {
    id: '1',
    title: 'No Title',
    image: noImage
}

export default function ProductCard({ children, product = productDefault }: PropsI) {
    const { Provider } = ProductContext;
    const {counter, handleClick} = useProduct();
    return ( 
        <Provider value={{
            counter,
            handleClick,
            product
        }}>
            <div  className={styles.productCard}>
                { children }
            </div>
        </Provider>
    )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;