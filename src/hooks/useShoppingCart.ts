import { useState } from "react";
import { OnChangeArgsI, ProductInCartI, ProductsI } from "../interfaces/interfaces";

export const useShoppingCart = ()=>{
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCartI }>({});


    const onProductCountChange = ({count}: OnChangeArgsI, product: ProductsI)=>{
        setShoppingCart( oldSC => {

            const productInCart: ProductInCartI = oldSC[product.id]
                                        || { ...product, count: 0 };

            const countMax = Math.max(productInCart.count + count, 0);
            if( countMax > 0 ){
                productInCart.count += count;

                return{
                    ...oldSC,
                    [product.id]: productInCart
                }

            }
            
            //DELETE

            const { [product.id]: toDel, ...rest } = oldSC;
            return rest;
        }

            // if(count === 0){
            //     const { [product.id]: toDel, ...rest } = oldSC;

            //     return{
            //         ...rest
            //     }
            // }
            // return {
            //     ...oldSC,
            //     [product.id]: {...product, count}
            // }
        )
    }


    return {
        shoppingCart,
        onProductCountChange
    }
}