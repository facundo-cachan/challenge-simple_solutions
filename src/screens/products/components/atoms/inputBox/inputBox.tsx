import { Button, Input } from '@atoms'
import translator from '@hooks/_translator'

import type { ButtonProps } from '@atoms/button/button-props'
import type { TextInputProps } from '@atoms/input/input-props'
import type { FC } from 'react'

export type FieldProps = { type: string; label: string; icon: string }

const InputBox: FC<TextInputProps> = (
  { label = '', icon, ...props }: Partial<TextInputProps> & Partial<FieldProps>
): JSX.Element => {
  // console.log('🙄 InputBox', props);

  return (<Input leftIcon={icon} placeholder={translator(label)} {...props} />)
}
export const SubmitButton: FC<ButtonProps> = ({ onPress }) => (<Button title={translator('send')} onPress={onPress} />)
export default InputBox
