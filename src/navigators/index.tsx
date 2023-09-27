import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Fragment } from 'react';

import { useThemeProvider } from '@providers/theme/theme-provider';
import HomeStack from './HomeStack';

import { CATALOG } from '@env';
import CatalogStack from './CatalogStack';

import type { ThemeProps } from '@props/theme';
import type { ParamListBase } from '@react-navigation/native';

export const { Navigator, Screen } = createStackNavigator<ParamListBase>();

const RootNavigator = (): JSX.Element => {
  const theme: ThemeProps = useThemeProvider()

  return !CATALOG ? (<CatalogStack theme={theme} />) : (
    <NavigationContainer theme={theme}>
      <Navigator>
        {
          [
            HomeStack
          ].map((Module, i: number) => (
            <Fragment key={i}>{Module()}</Fragment>
          ))
        }
      </Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
