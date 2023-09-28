/**
 * Event Screen Page
 *
 * @screen
*/

import { useEffect, useState } from 'react'

import { List } from '@atoms'
import ProductAPI from '@hooks/api/productsAPI'
import { Card } from '../components'
import ProductsScreenTemplate from '../templates/products-template-index'

import type { NavigatorProps } from '@props/navigator'
import type ProductProps from '@props/product'
import type { FC, SetStateAction } from 'react'

const ProductsScreen: FC<NavigatorProps> = (): JSX.Element => {
  const [isLoading, setLoader] = useState<boolean>(true)
  const [products, setProducts] = useState<SetStateAction<ProductProps[]> | unknown>([])

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
    </ProductsScreenTemplate>
  )
}

export default ProductsScreen
