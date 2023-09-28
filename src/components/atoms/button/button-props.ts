import type { IconProps } from '@atoms/icon/icon-props';
import type { ReactNode } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import type { PressableProps } from 'react-native/Libraries/Components/Pressable/Pressable';

export interface ButtonProps extends PressableProps {
  badge?: string
  children?: ReactNode | ReactNode[];
  accessibilityLabel?: string
  variant?: IconProps['variant']
  iconVariant?: IconProps['type']
  leftIcon?: IconProps['name']
  rightIcon?: IconProps['name']
  title?: string
  style?: ViewStyle | ViewStyle[]
  styleText?: TextStyle
  disabled?: boolean
  loading?: boolean
  onPress: PressableProps['onPress']
}
export type ButtonIconProps = {
  icon: ButtonProps['leftIcon'] | ButtonProps['rightIcon']
  style?: IconProps['style']
  color?: IconProps['color']
}