import { useState } from "react";
import { OnChangeArgsI, ProductInCartI, ProductsI } from "../interfaces/interfaces";

export const useShoppingCart = ()=>{
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCartI }>({});


    const onProductCountChange = ({count}: OnChangeArgsI, product: ProductsI)=>{
        setShoppingCart( oldSC => {
            if(count === 0){
                const { [product.id]: toDel, ...rest } = oldSC;

                return{
                    ...rest
                }
            }
            return {
                ...oldSC,
                [product.id]: {...product, count}
            }
          }
        )
    }   

    return {
        shoppingCart,
        onProductCountChange
    }
}