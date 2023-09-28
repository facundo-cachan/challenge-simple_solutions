import { hp, width } from '@hooks/_dimensions'
import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Platform.OS === 'ios' ? 80 : 1,
    height: hp(85),
    width
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
