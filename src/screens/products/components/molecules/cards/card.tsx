/**
 * Represents a Product.
 * @constructor
 * @return {JSX.Element} Product
 */


import { View } from 'react-native'

import { Button, Text } from '@atoms'
import useCart from '@providers/recoil/atoms/cart'
import styles from './card-styles'

import type ProductProps from '@props/product'
import type { FC } from 'react'

const Card: FC<ProductProps> = (product: ProductProps): JSX.Element => {
  const { add, remove } = useCart()
  const { id, username, price } = product

  const handleAddToCart = () => {
    add(product)
  }
  const handleRemoveFromCart = () => {
    remove(id)
  }

  return (
    <>
      <View key={id} style={styles.card}>
        <Button
          title="+"
          variant="extraSmall"
          onPress={handleAddToCart}
        />
        <Text>{username} ${price}</Text>
        <Button
          title="-"
          variant="extraSmall"
          onPress={handleRemoveFromCart}
        />
      </View>
    </>
  )
}

export default Card
