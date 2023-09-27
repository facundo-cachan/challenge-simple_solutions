
/**
 * Home Stack Navigator
 *
 * @format
 */

import Drawer from '@providers/navigator/drawer'

import ScreenButton from '@screens/examples/button-example'
import ScreenInput from '@screens/examples/input-example'
import ScreenText from '@screens/examples/text-example'

import type { ThemeProps } from '@props/theme'

const CatalogStack = ({ theme }: {theme: ThemeProps}) => (
  <Drawer theme={theme} screens={[
    ScreenText, ScreenButton, ScreenInput
  ]} />
)
export default CatalogStack
