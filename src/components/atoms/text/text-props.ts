import type { VariantFont } from '@props/theme'
import type { ReactNode } from 'react'
import type { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes'
import type { TextProps as Default } from 'react-native/Libraries/Text/Text'

export type TextProps = Default & {
  color?: TextStyle['color']
  children: ReactNode | string
  variant?: keyof typeof VariantFont
}
