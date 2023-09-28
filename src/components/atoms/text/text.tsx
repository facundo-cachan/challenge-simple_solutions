/**
 * Represents a Text component.
 * @constructor
 * @param {ReactNode} children - Display text.
 * @param {string} color - Color of Text.
 * @param {string} variant - Variant of Text.
 * @param {StyleProp<TextStyle>} style - Style of Text.
 * @param {Function} onPress - OnPress event of Text.
 * 
 * @return {JSX.Element} Text
 */

import { Text as RNText } from 'react-native'

import { useThemeProvider } from '@providers/theme/theme-provider'
import styles from './text-styles'

import type { FC } from 'react'
import type { TextProps } from './text-props'

const Text: FC<TextProps> = ({
  children, color, style,
  variant = 'normal', onPress }
  : TextProps): JSX.Element => {
  const { colors, fonts } = useThemeProvider()

  if (!children) return (<></>)

  return (<RNText
    accessibilityRole="text"
    onPress={onPress}
    style={[
      styles.text,
      {
        color: color ?? colors.text
      },
      // @ts-ignore
      fonts[variant],
      style
    ]}
  >{children}</RNText>)
}

export default Text