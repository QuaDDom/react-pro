import ProductButtons from '../components/ProductButtons';
import ProductCard from '../components/ProductCard';
import '../styles/custom-styles.css';
import ProductImage from '../components/ProductImage';
import ProductTitle from '../components/ProductTitle';
import styles from '../styles/styles.module.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    image: 'coffee-mug.png'
}

export default function Shopping() {
    return (
        <div>
          <h2>Store</h2>
          <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
          }}>
            <ProductCard className="bg-dark">
                <>
                <ProductImage 
                img={product.image} 
                style={styles.productImg}
                className="hover-image"
                />
                <ProductTitle 
                title='Coffee Mug' 
                style={styles.productDescription}
                className="text-bold"
                />
                <ProductButtons
                className="custom-button"
                />   
                </>
            </ProductCard>
            
            <ProductCard style={{
                background: '#7bcfff'
            }}>
                <>
                <ProductImage 
                img={product.image} 
                style={styles.productImg}
                />
                <ProductTitle 
                title='Coffee Mug' 
                style={styles.productDescription}
                />
                <ProductButtons style={{
                    display: 'flex',
                    justifyContent: 'end'
                }}/>   
                </>
            </ProductCard>
          </div>
        </div>
    )
}
