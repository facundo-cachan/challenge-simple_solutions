import useNavigation from '@providers/navigator/hooks/useNavigation'
import { useThemeProvider } from '@providers/theme/theme-provider'
import { View } from 'react-native'

import { Button } from '@atoms'
import styles from './styles'

import type { FC } from 'react'

const rootHeaderLeft: FC<{}> = (): JSX.Element => {
  const { goBack } = useNavigation()
  const {
    colors: { primary },
    fonts: { large: { fontSize } }
  } = useThemeProvider()

  return (
    <View style={[
      styles.tapbarLeft, { backgroundColor: primary }
    ]}>
      <Button
        variant="extraSmall"
        leftIcon="chevron-left"
        accessibilityRole="button"
        accessibilityLabel="Back"
        styleText={{ fontSize }}
        onPress={() => goBack()}
      />
    </View>
  )
}

export default rootHeaderLeft;

