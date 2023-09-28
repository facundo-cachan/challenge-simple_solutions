/**
 * Represents a Event Product.
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
  const { id, username, price } = product
  const { add } = useCart()
  const handleAddToCart = () => {
    console.log('handleAddToCart', id);
    add(product)
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
          onPress={() => { }}
        />
      </View>
    </>
  )
}

export default Card
