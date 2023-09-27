import { Button } from '@atoms'
import translator from '@hooks/_translator'

import type { ButtonProps } from '@atoms/button/button-props'
import type { FC } from 'react'

const BtnList: FC<ButtonProps> = ({ title = '', onPress, ...props }: ButtonProps): JSX.Element => (
  <Button title={translator(title)} onPress={onPress} {...props} />)

export default BtnList
  