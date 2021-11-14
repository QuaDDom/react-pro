import { createContext } from "react";

interface ProductI{
    id: string,
    title: string,
    image?: string,
}

interface ProductContextPropsI{
    counter: number,
    handleClick: (method: string)=> void,
    product:  ProductI
}

export const ProductContext = createContext({

} as ProductContextPropsI);

