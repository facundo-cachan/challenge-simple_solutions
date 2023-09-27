/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import RootNavigator from '@navigators';
import RecoilNexus from '@providers/state-management/Nexus';
import { ThemeProvider } from '@providers/theme/theme-provider';

function App(): JSX.Element {

  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <RecoilNexus />
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </RecoilRoot>
    </SafeAreaProvider>
  )
}

export default App;
