import ProductButtons from '../components/ProductButtons';
import ProductCard from '../components/ProductCard';
import '../styles/custom-styles.css';
import ProductImage from '../components/ProductImage';
import ProductTitle from '../components/ProductTitle';
import styles from '../styles/styles.module.css';
import { products } from '../data/products';

const product = products[0];

export default function Shopping() {

    return (
        <div>
          <h2>Store</h2>
          <ProductCard 
          className="bg-dark"
          key={product.id}
          initialValues={{
              count: 1,
              maxCount: 10 }}>
            {
              ({reset, count, handleClick, isMaxCountReached})=> (
                <>
                    <ProductImage 
                    img={product.image} 
                    style={styles.productImg}
                    className="hover-image"
                    />
                    <ProductTitle 
                    title={product.title} 
                    style={styles.productDescription}
                    className="text-bold"
                    />
                    <ProductButtons
                    className="custom-button"
                    />
                    <button onClick={reset}>Reset</button>     
                    <button onClick={()=> handleClick(-2)}>-2</button>
                    <span>{count}</span>
                    {
                     isMaxCountReached || <button onClick={()=> handleClick(+2)}>+2</button>
                    }
                </>
              )
            }
            </ProductCard>
        </div>
    )
}
