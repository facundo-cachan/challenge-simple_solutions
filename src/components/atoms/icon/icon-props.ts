/**
 * Interface for Icon.
 *
 * @interface
 */

import type { VariantFont } from '@props/theme'
import type { IconButtonProps } from 'react-native-vector-icons/Icon'

enum VariantIcon {
  feather,
  material,
  fontAwesome
}

export type IconProps = IconButtonProps & {
  variant?: keyof typeof VariantFont
  type?: keyof typeof VariantIcon
}
