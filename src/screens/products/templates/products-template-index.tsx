/**
 * Products Screen Template
 *
 * @screen
 */

import { View } from 'react-native';

import { Loader, Text } from '@atoms';

import styles from './products-template-styles';

import type { TemplateProps } from '@props/screen';

const ProductsScreenTemplate = ({ children, loading, title }: TemplateProps): JSX.Element => loading ?
  (<Loader.ActivityIndicator />) : (
    <View style={styles.container}>
      {title && (
        <Text variant="large" style={styles.title}>{title}</Text>
      )}
      {children}
    </View>
  )

export default ProductsScreenTemplate
