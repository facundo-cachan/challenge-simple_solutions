export enum VariantFont {
  normal = 'normal',
  large = 'large',
  extraLarge = 'extraLarge',
  small = 'small',
  extraSmall = 'extraSmall',
}
type Font = {
  fontFamily: string
  lineHeight: number
  fontSize: number
  fontWeight?: string
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize'
}
export type ThemeProps = {
  dark: boolean
  fonts: {
    [key in VariantFont]: Font
  }
  colors: {
    primary: string
    secondary: string
    error: string
    background: string
    card: string
    text: string
    border: string
    notification: string
  }
}
