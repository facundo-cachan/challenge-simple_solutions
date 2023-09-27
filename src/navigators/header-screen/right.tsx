import { View } from 'react-native'

import { Button } from '@atoms'
import { useThemeProvider } from '@providers/theme/theme-provider'
import styles from './styles'

const rootHeaderRight = () => {
  const { isDark, changeTheme, colors: { primary } } = useThemeProvider()

  return (
    <View style={[styles.tapbarRight, { backgroundColor: primary }]}>
      <Button
        variant="extraSmall"
        accessibilityLabel="Theme"
        iconVariant="feather"
        leftIcon={isDark ? 'moon' : 'sun'}
        onPress={() => changeTheme(!isDark)}
      />
      <Button
          variant="extraSmall"
          iconVariant="material"
          accessibilityLabel="Account"
          leftIcon="logout"
          onPress={() => console.log('LogOut')}
        />
    </View>
  )
}

export default rootHeaderRight
