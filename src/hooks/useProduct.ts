import { useEffect, useRef, useState } from "react";
import { OnChangeArgsI, ProductsI } from '../interfaces/interfaces';

interface useProductsArg{
    product: ProductsI,
    onChange?: (args: OnChangeArgsI)=> void,
    value?: number
}

export const useProduct = ({product, onChange, value=0}: useProductsArg)=>{
    const [counter, setCounter] = useState(value);

    const isControlled = useRef( !!onChange );

    useEffect(()=>setCounter(value),[value])

    const handleClick = (value: number)=>{

        if(isControlled.current){
            return onChange!({ count: value, product });
        }

        const newValue = Math.max( counter + value, 0);
        setCounter(newValue);

    }

    return{
        counter,
        handleClick
    }

}