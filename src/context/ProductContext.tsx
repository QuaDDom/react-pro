import { createContext } from "react";

interface ProductI{
    id: string,
    title: string,
    image?: string,
}

interface ProductContextPropsI{
    counter: number,
    handleClick: (value: number)=> void,
    product:  ProductI,
    maxCount?: number
}

export const ProductContext = createContext({

} as ProductContextPropsI);

