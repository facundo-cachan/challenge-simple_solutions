export enum VariantFont {
  normal,
  large,
  extraLarge,
  small,
  extraSmall,
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
