import { Button } from '@atoms'
import useNavigation from '@providers/navigator/hooks/useNavigation'
import { Alert, ScrollView } from 'react-native'
import styles from './screens-styles'

import { useThemeProvider } from '@providers/theme/theme-provider'

import type { NavigatorProps } from '@props/navigator'
import type { FC } from 'react'

const ScreenButton: FC<NavigatorProps> = () => {
  const { navigate } = useNavigation()
  const { colors: { background } } = useThemeProvider()

  const nav = () => {
    navigate('Avatar')
  }
  const onPress = () => {
    Alert.alert('onPress')
  }

  return (
    <ScrollView style={[styles.screen, { backgroundColor: background }]}>
      <Button style={styles.mv} onPress={onPress} title="Simple" />
      <Button style={styles.mv} onPress={onPress} loading />
      {/* <Button style={styles.mv} onPress={onPress} avatar={messi} variant="large" title='Lionel Messi - Avatar' /> */}
      <Button style={styles.mv} onPress={onPress} leftIcon="lock" variant="large" title="Lock Icon Left" />
      <Button style={styles.mv} onPress={onPress} rightIcon="search" variant="large" title="Search Icon Right" />
      <Button style={styles.mv} onPress={onPress} leftIcon="lock" rightIcon="search" variant="large" title="Both icons" />
      <Button leftIcon="car" variant="extraSmall" onPress={nav} />
      <Button leftIcon="jenkins" variant="small" title="small" onPress={onPress} />
      <Button leftIcon="calendar" variant="large" title="large" onPress={onPress} />
      <Button leftIcon="fire" variant="extraLarge" title="extraLarge" onPress={onPress} />
    </ScrollView>
  )
}

export default ScreenButton

