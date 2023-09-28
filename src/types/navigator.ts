import type { TextProps } from '@atoms/text/text-props'
import type { NavigationProp, RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack/lib/typescript/src/types'
import type { ComponentType, FC } from 'react'

export type Router = {
  key: string
  name: string
  params: {}
}
export type HeaderScreenProps = {
  left?: boolean
  right?: boolean
  title?: NativeStackNavigationOptions['headerTitle']
}
export enum RootStack {
  SignInScreen,
  ProductsScreen,
}
export type ScreenTypeProps = {
  component: FC<any> | ComponentType<any>,
  options?: Partial<NativeStackNavigationOptions>
}
export type RoutesScreens = {
  [key in RootStack]: ScreenTypeProps['component']
}
export type Theme = {
  dark: boolean
  colors: {
    primary: string
    background: string
    card: string
    text: string
    border: string
    notification: string
  }
  fonts: keyof TextProps['variant']
  animation: {
    scale: number
  }
}
export type NavigatorProps = {
  navigation: NavigationProp<keyof typeof RootStack>
  route?: RouteProp<RoutesScreens>
}
export type ScreenType = ScreenTypeProps & {
  name: string,
}
export type TabType = ScreenTypeProps & {
  label: string
  iconName: string
  navigateTo: keyof typeof RootStack
}
