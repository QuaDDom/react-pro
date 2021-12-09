
export interface ProductsI{
    id: string,
    title: string,
    image?: string,
}

export interface OnChangeArgsI{
    product: ProductsI,
    count: number
}


export interface ProductInCartI extends ProductsI{
    count: number
}

export interface InitialValuesI{
    count?: number,
    maxCount?: number
}

export interface ProductCardHandlersI{
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: ProductsI,
    handleClick: ( value:number )=> void;
    reset: ()=> void,
}