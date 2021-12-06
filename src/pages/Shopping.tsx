import ProductButtons from '../components/ProductButtons';
import ProductCard from '../components/ProductCard';
import '../styles/custom-styles.css';
import ProductImage from '../components/ProductImage';
import ProductTitle from '../components/ProductTitle';
import styles from '../styles/styles.module.css';
import ShoppingCart from '../components/ShoppingCart';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export default function Shopping() {
 
    const { shoppingCart, onProductCountChange } = useShoppingCart();

    return (
        <div>
          <h2>Store</h2>
          <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
          }}>
            {
                products.map( (product) => (
                    <ProductCard className="bg-dark" key={product.id} 
                    onChange={ (e)=> onProductCountChange(e, product)}
                    value={ shoppingCart[product.id]?.count || 0 }
                    >
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
                    </ProductCard>
                ))
            }
          </div>
          <ShoppingCart shoppingCart={shoppingCart} onProductCountChange={onProductCountChange}/>

            <div>
                <code>
                    { JSON.stringify(shoppingCart, null, 5) }
                </code>
            </div>

        </div>
    )
}
