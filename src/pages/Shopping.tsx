import ProductButtons from '../components/ProductButtons';
import ProductCard from '../components/ProductCard';
import ProductImage from '../components/ProductImage';
import ProductTitle from '../components/ProductTitle';
import { products } from '../data/products';

const product = products[0];

export default function Shopping() {

    return (
        <div>
          <h2>Store</h2>
          <ProductCard 
          initialValues={{
              count: 1
          }}>
            {
              ({reset, count, handleClick, isMaxCountReached})=> (
                <>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>
                </>
              )
            }
            </ProductCard>
        </div>
    )
}
