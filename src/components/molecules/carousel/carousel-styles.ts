import { StyleSheet } from "react-native";

import { hp, wp } from '@hooks/_dimensions';

const styles = StyleSheet.create({
  content: {
    paddingHorizontal:1,
    width: wp('95%')
  },
  img: {
    minHeight: hp(30),
    resizeMode: 'cover',
    width: '100%'
  }
});

export default styles;
