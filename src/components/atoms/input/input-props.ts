import type { IconProps } from '@atoms/icon/icon-props';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { TextStyle, ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type TextInputStyleProps = {
  container?: ViewStyle
  content?: ViewStyle
  input?: ViewStyle
  label?: TextStyle
  text?: TextStyle
}
export type TextInputProps = {
  leftIcon?: string
  rightIcon?: string
  label?: string
  value: string
  loading?: boolean
  placeholder?: string
  secureTextEntry?: boolean
  children?: ReactNode | string
  variant?: IconProps['variant']
  iconVariant?: IconProps['type']
  style?: TextInputStyleProps
  onPress?: () => void
  onChangeText: Dispatch<SetStateAction<any>>
}
