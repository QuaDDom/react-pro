import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

interface PropsI{
    title?: string,
    style: string,
    className?: string
}

export default function ProductTitle({title='', style, className}: PropsI) {
    const { product } = useContext(ProductContext);
    return (
        <p className={`${style} ${className}`}>{title ? title : product.title}</p>

    )
}

