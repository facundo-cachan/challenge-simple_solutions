import { useThemeProvider } from '@providers/theme/theme-provider'
import { View } from 'react-native'

import styles from './styles'

import type { FC } from 'react'

const rootHeaderLeft: FC<{}> = (): JSX.Element => {
  const { colors: { primary } } = useThemeProvider()

  return (
    <View style={[
      styles.tapbarLeft, { backgroundColor: primary }
    ]} />
  )
}

export default rootHeaderLeft

