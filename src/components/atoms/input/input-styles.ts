import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
  content: {
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
    width: '100%'
  },
  label: {
    uppercase: true,
    marginVertical: 5,
  },
  input: {
    padding: 10,
    minHeight: 30,
    alignItems: 'center',
    flex: 1,
    width: '100%'
  }
})

export default styles
