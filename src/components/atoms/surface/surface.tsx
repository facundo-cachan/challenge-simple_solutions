import { View } from 'react-native';

import { useThemeProvider } from '@providers/theme/theme-provider';
import styles from './surface-styles';

import type { SurfaceProps } from './surface-props';

const Surface = ({ children, style }: SurfaceProps) => {
  const { colors: { surface } } = useThemeProvider()

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: surface
      },
      style
    ]}>
      {children}
    </View>
  )
}

export default Surface
