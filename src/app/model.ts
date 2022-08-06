export interface cartItem {
    id: number,
    mainImage: any,
    name: string,
    size: number,
    price: {
        amount: number,
        currency: string
    },
    amount: number
}
