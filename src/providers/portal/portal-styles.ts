import { hp, wp } from "@hooks/_dimensions"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  backDrop: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    opacity: 0.5
  },
  content: {
    alignSelf: 'center',
    borderRadius: 20,
    padding: hp(1),
    marginTop: hp(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    width: hp(3), height: hp(3),
    top: hp(2),
    left: wp(35),
    zIndex: 99,
  },
  body: {
    marginTop: 30,
  }
})

export default styles
