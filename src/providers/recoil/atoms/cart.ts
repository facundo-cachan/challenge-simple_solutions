import type ProductProps from "@props/product";
import type { ProductInCartProps } from "@props/product";

import { atom, useRecoilState } from 'recoil';

const initialCart: ProductInCartProps[] = []
export const cartState = atom<ProductInCartProps[]>({
  key: 'cartState',
  default: initialCart
})

const useCart = () => {
  const [cart, setCart] = useRecoilState<ProductInCartProps[]>(cartState);

  const add = (product: ProductProps) => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const remove = (productId: ProductProps['id']) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart)
  }

  const clear = () => {
    setCart(initialCart)
  }

  return { cart, add, remove, clear }
}

export default useCart;