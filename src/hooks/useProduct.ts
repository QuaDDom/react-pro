import { useEffect, useState } from "react";
import { OnChangeArgsI, ProductsI } from '../interfaces/interfaces';

interface useProductsArg{
    product: ProductsI,
    onChange?: (args: OnChangeArgsI)=> void,
    value?: number
}

export const useProduct = ({product, onChange, value=0}: useProductsArg)=>{
    const [counter, setCounter] = useState(value);
    
    const handleClick = (value: number)=>{
        
        const newValue = Math.max( counter + value, 0);
        setCounter(newValue);
        onChange!({ count: newValue, product });
    }
    
    useEffect(()=>setCounter(value),[value]);

    return{
        counter,
        handleClick
    }

}