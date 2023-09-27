import { hp, wp } from '@hooks/_dimensions'
import shadow from '@styles/shadow'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    ...shadow,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    height: hp(30),
    marginVertical: 20,
    overflow: 'hidden',
    width: wp(90)

  },
  img: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%'
  }
})

export default styles
