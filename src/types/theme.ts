export enum VariantFont {
  normal,
  large,
  extraLarge,
  small,
  extraSmall,
}
type Font = {
  fontFamily: string;
  lineHeight: number;
  fontSize: number;
  fontWeight?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}
export type ThemeProps = {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    error: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  }
};
