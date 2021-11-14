import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

interface PropsI{
    title?: string,
    style: string
}

export default function ProductTitle({title='', style}: PropsI) {
    const { product } = useContext(ProductContext);
    return (
        <p className={style}>{title ? title : product.title}</p>
    )
}

