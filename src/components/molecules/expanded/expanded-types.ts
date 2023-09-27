import type { IconProps } from "@atoms/icon/icon-props"
import type { TextProps } from "@atoms/text/text-types"
import type { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes"

export type ExpandedProps = {
  label: string
  style?: ViewStyle
  icon?: IconProps['name']
  children: React.ReactNode
  variant?: TextProps['variant']
  iconVariant?: IconProps['variant']
}
