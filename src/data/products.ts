import { ProductsI } from "../interfaces/interfaces";

const product = {
    id: '1',
    title: 'Coffee Mug',
    image: './coffee-mug.png'
}
const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    image: './coffee-mug2.png'
}

export const products: ProductsI[] = [product, product2];