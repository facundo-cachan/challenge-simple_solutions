import { wp } from '@hooks/_dimensions'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp(3),
    marginVertical: wp(1),
  }
})

export default styles
