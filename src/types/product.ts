type ProductProps = {
  id: string
  username: string
  price: number
}
export type ProductInCartProps = ProductProps & {
  quantity: number
}
export default ProductProps