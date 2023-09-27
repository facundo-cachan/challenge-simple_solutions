import translator from '@hooks/_translator'
import { CheckboxInput } from '@molecules'
import { CheckboxInputProps } from '@molecules/checkbox-input/checkbox-input-props'

import type { FC } from 'react'

const CheckBox: FC<CheckboxInputProps> = (
  { label = '', icon, ...props }: Partial<CheckboxInputProps>
): JSX.Element => (<CheckboxInput label={translator(label)} icon={icon} {...props} style={{ checkbox: { borderWidth: 0 } }} />)

export default CheckBox
