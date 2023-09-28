import type ProductProps from '@props/product';
import { atom, selector } from 'recoil';

type ProductInCartProps = ProductProps & {
  quantity: number
}

export const cartState = atom<ProductInCartProps[]>({
  key: 'cartState',
  default: [],
});

export const cartItemsSelector = selector({
  key: 'cartItemsSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  },
});

export const addToCart = (item: ProductProps) => {
  const existingItem = cartState.find((i: ProductProps) => i.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartState.push({ ...item, quantity: 1 });
  }
};

export const removeFromCart = (id: ProductProps['id']) => {
  const existingItem = cartState.find((i) => i.id === id);

  if (existingItem) {
    if (existingItem.quantity === 1) {
      cartState.splice(cartState.indexOf(existingItem), 1);
    } else {
      existingItem.quantity -= 1;
    }
  }
};