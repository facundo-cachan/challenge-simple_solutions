import { Image, View } from 'react-native';

import List from '@atoms/listing/list';
import styles from './carousel-styles';

import type { FC } from 'react';
import type { ImageCarouselProps } from './carousel-props';

const ImageCarousel: FC<ImageCarouselProps> = ({ data, style, scrollIndicator }: ImageCarouselProps): JSX.Element => (
  <List
    data={data}
    horizontal={true}
    scrollIndicator={scrollIndicator}
    renderItem={({ item: { id, uri } }) => (
      <View style={style} key={id}>
        <View style={styles.content}>
          <Image source={{ uri }} style={[{
            borderRadius: (style?.borderRadius ?? 0) as number,
          }, styles.img]} />
        </View>
      </View>
    )
    }
  />
);

export default ImageCarousel;
