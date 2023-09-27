
/**
 * Home Screen Page
 *
 * @screen
 */

import { useEffect, useState } from 'react'

import List from '@atoms/listing/list'
import { Card } from '@molecules'
import HomeScreenTemplate from '../templates/home-template-index'

import type { Category } from '@props/category'
import type { NavigatorProps } from '@props/navigator'
import type { FC } from 'react'

const HomeScreen: FC<NavigatorProps> = ({ navigation: { navigate } }: NavigatorProps): JSX.Element => {
  const [isLoading, setLoader] = useState<boolean>(true)
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    
  }, [])

  return (
    <HomeScreenTemplate loading={isLoading}>
      <List
        data={categories as []}
        renderItem={({ item }: Category) => (
          <Card
            key={item.id}
            {...item}
            onPress={() => console.log('pressed')}
          />
        )
        }
      />
    </HomeScreenTemplate>
  )
}

export default HomeScreen
