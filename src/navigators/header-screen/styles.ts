import { hp, wp } from "@hooks/_dimensions";
import { StyleSheet } from "react-native";

const padding: number = 10;
const config = {
  width: wp(50),
  flexDirection: 'row',
  paddingVertical: padding,
  justifyContent: 'space-between',
} as const
const styles = StyleSheet.create({
  popup: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 25,
    padding: 10,
    opacity: 0.8,
    height: hp(50),
    width: wp(80),
  },
  items: {
    paddingVertical: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  itemText: {
    fontWeight: 'bold',
  },
  tapbarLeft: {
    ...config,
    paddingLeft: padding,
  },
  tapbarRight: {
    ...config,
    paddingRight: padding,
  }
})

export default styles
