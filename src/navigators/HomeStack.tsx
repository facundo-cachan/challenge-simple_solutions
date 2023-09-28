
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

// const signInHeaderScreen = rootHeaderScreen({ right: false }) as StackNavigationOptions

const screens: ScreenType[] = [
  {
    component: SignInScreen,
    name: 'SignInScreen',
    options: {
      headerShown: false
    }
  },
  {
    component: ProductsScreen,
    name: 'ProductsScreen',
    options: {
      headerLeft: () => <></>
    }
  }
]
const screenOptions: StackNavigationOptions = rootHeaderScreen({ right: true })
const HomeStack = () => (
  <Screen name="HomeStack" options={{ headerShown: false }}>
    {() => (
      <Navigator initialRouteName="HomeScreen" screenOptions={screenOptions}>
        {screens.map((props: ScreenType) => (
          <Screen key={props.name} {...props} />
        ))}
      </Navigator>
    )}
  </Screen>
)

export default HomeStack
