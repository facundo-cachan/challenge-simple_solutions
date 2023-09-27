import type { ListProps } from '@atoms/listing/list-props';
import type { StyleProp } from 'react-native';

export type ImageCarouselProps = {
  data: ListProps['data'];
  scrollIndicator?: boolean;
  style?: StyleProp<any>;
}
