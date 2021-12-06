import { OnChangeArgsI } from '../interfaces/interfaces';
import '../styles/custom-styles.css';
import ProductButtons from './ProductButtons';
import ProductCard from './ProductCard';
import ProductImage from './ProductImage';

interface ProductI{
    id: string,
    title: string,
    image?: string,
}

interface ProductInCartI extends ProductI{
    count: number
}

interface PropsI{
    shoppingCart: {
        [key: string]: ProductInCartI
    },
    onProductCountChange: ({ count }: OnChangeArgsI, product: ProductI) => void
}

export default function ShoppingCart({ shoppingCart, onProductCountChange }: PropsI) {

    return (
        <div className="shopping-cart">
            {
                Object.entries( shoppingCart ).map( ([key, product]) => (              
                    <ProductCard 
                    key={key}
                    className="bg-dark"
                    style={{ width: '95px'}}
                    value={product.count}
                    onChange={ (e)=> onProductCountChange(e, product)}
                    >
                        <ProductImage 
                        img={product.image}
                        className="productImg hover-image"
                        />
                        <ProductButtons
                        className="custom-button"
                        />   
                    </ProductCard>
                ))
            }
        </div>
    )
}
