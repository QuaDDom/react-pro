import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from '../context/ProductContext';

interface ProductImagePropsI{
    img?: string,
    style: string
}

export default function ProductImage({img='', style}: ProductImagePropsI) {
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
        <img className={style} src={imgToShow} alt="Coffee Mug" />
    )
}
