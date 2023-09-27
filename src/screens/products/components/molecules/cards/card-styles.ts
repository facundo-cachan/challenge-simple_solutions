import { hp, wp } from '@hooks/_dimensions'
import { StyleSheet } from 'react-native'

const info = {
  backgroundColor: '#000',
  flexDirection: 'row',
  justifyContent: 'space-between',
  opacity: 0.8,
  padding: 10,
  top: '25%',
  width: '100%'
} as const
const styles = StyleSheet.create({
  info,
  card: {
    alignSelf: 'center',
    width: wp(90)
  },
  img: {
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
    height: hp(30),
    justifyContent: 'center',
    marginVertical: 20,
    opacity: 0.9,
    overflow: 'hidden',
    resizeMode: 'cover',
    width: '100%'
  },
  overlay: {
    ...info,
    justifyContent: 'center',
    top: '1%',
  },
  textImg: {
    paddingLeft: 10
  }
})

export default styles
