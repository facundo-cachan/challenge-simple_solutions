import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export enum CardsVariant {
  'event-common' = 'event-common'
}

export type CardProps = {
  variant?: CardsVariant;
  name: string;
  picture: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
