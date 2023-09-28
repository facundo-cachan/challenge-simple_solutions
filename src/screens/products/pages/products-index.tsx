/**
 * Event Screen Page
 *
 * @screen
*/

import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { List, Text } from '@atoms'
import ProductAPI from '@hooks/api/productsAPI'
import { cartItemsSelector, cartState } from '@providers/recoil/atoms/cart'
import { Card } from '../components'
import ProductsScreenTemplate from '../templates/products-template-index'

import type { NavigatorProps } from '@props/navigator'
import type ProductProps from '@props/product'
import type { FC } from 'react'

const ProductsScreen: FC<NavigatorProps> = (): JSX.Element => {
  const [isLoading, setLoader] = useState<boolean>(true)
  const [products, setProducts] = useState<ProductProps[]>()
  const cart = useRecoilState(cartState);
  const cartItems = useRecoilValue(cartItemsSelector);

  useEffect(() => {
    ProductAPI.getAll()
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(() => setLoader(false))
  }, [])

  return (
    <ProductsScreenTemplate loading={isLoading}>
      <List
        data={products as []}
        renderItem={({ item }: { item: ProductProps }) => (
          <Card key={item.id} {...item} />)
        }
      />
      <Text>{JSON.stringify(cart, null, 2)}</Text>
      <Text>{JSON.stringify(cartItems, null, 2)}</Text>
    </ProductsScreenTemplate>
  )
}

export default ProductsScreen
