import ProductButtons from '../components/ProductButtons';
import ProductCard from '../components/ProductCard';
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
            <ProductCard>
                <>
                <ProductImage img={product.image} style={styles.productImg}/>
                <ProductTitle title='Coffee Mug' style={styles.productDescription}/>
                <ProductButtons/>   
                </>
            </ProductCard>
          </div>
        </div>
    )
}
