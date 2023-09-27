/**
 * Virtualized List Component
 *
 * @component
 */

import { VirtualizedList } from 'react-native';

import type { ListProps } from './list-props';

const Virtualized = ({ data, renderItem, scrollIndicator, horizontal }: ListProps): JSX.Element => (
  <VirtualizedList
    bounces={false}
    initialNumToRender={data.length}
    getItem={(_, i: number) => {
      const item = data[i];
      return item ? item : {};
    }}
    getItemCount={() => data.length}
    keyExtractor={(item: Partial<{id: string}>, index: number) => item.id?.toString() || index.toString()}
    renderItem={renderItem}
    horizontal={horizontal}
    showsHorizontalScrollIndicator={Boolean(scrollIndicator)}
  />
);

export default Virtualized;
