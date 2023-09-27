import { Text } from '@atoms'
import { ScrollView } from 'react-native'
import styles from './screens-styles'

import { VariantFont } from '@props/theme'
import { useThemeProvider } from '@providers/theme/theme-provider'

import type { NavigatorProps } from '@props/navigator'
import type { FC } from 'react'

const ScreenText: FC<NavigatorProps> = () => {
  const { colors: { backgroundColor } } = useThemeProvider()

  return (
    <ScrollView style={[styles.screen, { backgroundColor }]}>
      {
        Object.values(VariantFont).map((variant: unknown) => {
          if (typeof (variant) === 'number') return null
          return (
            <Text variant={variant as string} style={styles.mv}>Text {String(variant)}</Text>
          )
        })}
    </ScrollView>
  )
}

export default ScreenText

