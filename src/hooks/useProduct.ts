import { useEffect, useRef, useState } from "react";
import { InitialValuesI, OnChangeArgsI, ProductsI } from '../interfaces/interfaces';

interface useProductsArg{
    product: ProductsI,
    onChange?: (args: OnChangeArgsI)=> void,
    value?: number,
    initialValues?: InitialValuesI
}

export const useProduct = ({product, onChange, value=0, initialValues }: useProductsArg)=>{
    const [counter, setCounter] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false);

    const handleClick = (value: number)=>{
        
        let newValue = Math.max( counter + value, 0);

        if(initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount );
        } 

        setCounter(newValue);
    }

    const reset = ()=> setCounter(initialValues?.count || value);

    useEffect(()=>{
        if( !isMounted.current ) return;
        setCounter(value)
    },[value]);
    
    useEffect(()=>{
        isMounted.current = true;
    },[])
    

    return{
        counter,
        handleClick,
        reset,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter
    }

}