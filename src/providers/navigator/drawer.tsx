
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'

import { Button } from '@atoms'
import { useThemeProvider } from '@providers/theme/theme-provider'

import type { ScreenType } from '@props/navigator'
import type { ThemeProps } from '@props/theme'

type DrawerProps = {
  theme: ThemeProps
  screens: ScreenType[]
}
const { Navigator, Screen } = createDrawerNavigator();
const mr = { marginRight: 20 } as const
const screenOptions = {
  headerMode: 'screen',
  headerShadowVisible: true,
  headerRight: () => {
    const { isDark, changeTheme } = useThemeProvider()

    return (
      <View style={mr}>
        <Button
          variant="extraSmall"
          accessibilityLabel="Theme"
          iconVariant="feather"
          style={mr}
          leftIcon={isDark ? 'moon' : 'sun'}
          onPress={() => changeTheme(!isDark)}
        />
      </View>
    )
  },
}
export default function Drawer({ theme, screens }: DrawerProps) {

  return (
    <NavigationContainer theme={theme}>
      <Navigator>
        {
          screens.map((screen, i: number) => (
            <Screen key={i} name={screen.name.replace('Screen', '')}
              component={screen} options={screenOptions} />
          ))
        }
      </Navigator>
    </NavigationContainer>
  );
}