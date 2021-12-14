import { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from '../context/ProductContext';

interface ProductImagePropsI{
    img?: string,
    style?: CSSProperties,
    className?: string
}

export default function ProductImage({img='', style, className}: ProductImagePropsI) {
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if(img){
        imgToShow = img;
    } else if(product.image){
        imgToShow = product.image;
    } else{
        imgToShow = noImage;
    }
   

    return (
        <img className={`${className} ${styles.productImg}`} src={imgToShow} style={ style } alt="Product" />
    )
}
