import { wp } from "@hooks/_dimensions";
import { StyleSheet } from "react-native";

const padding: number = 10;
const config = {
  width: wp(50),
  flexDirection: 'row',
  justifyContent: 'space-between',
} as const
const styles = StyleSheet.create({
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
