/**
 * Represents a Event Product.
 * @constructor
 * @return {JSX.Element} Product
 */


import { View } from 'react-native'
import { useRecoilState } from 'recoil'

import { Button, Text } from '@atoms'
import { cartState } from '@providers/recoil/atoms/cart'
import styles from './card-styles'

import type ProductProps from '@props/product'
import type { FC } from 'react'

const Card: FC<ProductProps> = ({ id, username, price }: ProductProps): JSX.Element => {
  const [_, setCart] = useRecoilState(cartState)

  const handleAddToCart = (id: ProductProps['id']) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id, username, price, quantity: 1 }];
      }
    })
  }
  const handleRemove = (id: ProductProps['id']) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  return (
    <>
      <View key={id} style={styles.card}>
        <Text>{username} ${price}</Text>
        <Button
          title="+"
          variant="extraSmall"
          onPress={() => handleAddToCart(id)}
        />
        <Button
          title="-"
          variant="extraSmall"
          onPress={() => handleRemove(id)}
        />
      </View>
      
    </>
  )
}

export default Card
