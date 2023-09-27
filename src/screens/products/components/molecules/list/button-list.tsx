import Virtualized from '@core/listing/list'
import BtnList from '../../atoms/buttons/button-list'

import type { Category } from '@types/category'
import type { FC } from 'react'

const List: FC<Category> = (
  { options }: { options: Category[] }
): JSX.Element => (<Virtualized data={options}
  renderItem={({ item: { label, value, img } }) => (
    <BtnList variant="extraLarge" title={label} avatar={img} onPress={() => console.log(value)} />
  )} />)

  export default List