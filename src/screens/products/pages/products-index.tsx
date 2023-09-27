/**
 * Event Screen Page
 *
 * @screen
*/

import { useEffect, useState } from 'react'

import { List } from '@atoms'
import EventAPI from '@hooks/api/eventsAPI'
import { useThemeProvider } from '@providers/theme/theme-provider'
import { Card } from '../components'
import EventScreenTemplate from '../templates/event-template-index'

import type { NavigatorProps } from '@props/navigator'
import type EventProps from '@types/events'
import type { FC } from 'react'

const ProductsScreen: FC<NavigatorProps> = (
  {
    navigation: { navigate },
    route: { params: { created_by } }
  }: NavigatorProps): JSX.Element => {
  const [isLoading, setLoader] = useState<boolean>(true)
  const [events, setEvents] = useState<EventProps[]>([])
  const { colors: { background, primary } } = useThemeProvider()

  useEffect(() => {
    EventAPI.getAll({ by: created_by })
      .then(({ data }) => setEvents(data))
      .catch((error) => console.log(error))
      .finally(() => setLoader(!isLoading))
  }, [])

  return (
    <EventScreenTemplate loading={isLoading}>
      <List
        data={events as []}
        renderItem={({ item }: { item: EventProps }) => (
          <Card key={item.id} {...item} textColor={background}
            finishColor={primary} iconColors={background}
            onPress={() => console.log('EventByIdScreen', { eventId: item.id })
            } />)
        }
      />
    </EventScreenTemplate>
  )
}

export default ProductsScreen
