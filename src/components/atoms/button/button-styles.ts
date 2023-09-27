import { StyleSheet } from 'react-native'

const defaultButton = {
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  borderWidth: 1,
  borderRadius: 25,
  justifyContent: 'space-between',
  padding: 10,
  minHeight: 30,
} as const
const styles = StyleSheet.create({
  mr: { marginLeft: 10 },
  normal: {
    ...defaultButton,
    justifyContent: 'center'
  },
  extraLarge: {
    ...defaultButton,
    width: '100%'
  },
  large: {
    ...defaultButton,
    width: '75%'
  },
  small: {
    ...defaultButton,
    width: '25%'
  },
  extraSmall: {
    ...defaultButton,
    padding: 0,
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 0
  }
})

export default styles
