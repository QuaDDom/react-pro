
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