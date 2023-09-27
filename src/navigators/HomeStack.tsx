
/**
 * Home Stack Navigator
 *
 * @format
 */

import { Navigator, Screen } from '@navigators'
import rootHeaderScreen from './header-screen/'

import ProductsScreen from '@screens/products/pages/products-index'
import SignInScreen from '@screens/signIn/pages/signIn-index'

import type { ScreenType } from '@props/navigator'
import type { StackNavigationOptions } from '@react-navigation/stack/lib/typescript/src/types'

const screens: ScreenType[] = [
  {
    component: SignInScreen,
    name: 'SignInScreen'
  },
  {
    component: ProductsScreen,
    name: 'ProductsScreen'
  }
]
const screenOptions = () => rootHeaderScreen({ right: true }) as StackNavigationOptions
const HomeStack = () => (
  <Screen name="HomeStack" options={{ headerShown: false }}>
    {() => (
      <Navigator initialRouteName="SignInScreen" screenOptions={screenOptions}>
        {screens.map((props: ScreenType) => (
          <Screen key={props.name} {...props} />
        ))}
      </Navigator>
    )}
  </Screen>
)

export default HomeStack
