import { useState } from "react";

export const useProduct = ()=>{
    const [counter, setCounter] = useState(0);

    const handleClick = (method: string)=>{
        console.log(method)
        if(method === "increase"){
            setCounter(prev => Math.max(prev + 1, 0))
        }
        else{
            setCounter(prev => Math.max(prev - 1, 0))
        }
    }

    return{
        counter,
        handleClick
    }

}