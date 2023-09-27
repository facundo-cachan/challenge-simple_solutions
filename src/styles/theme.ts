import { Platform } from 'react-native';

import { getFontLineHeight, moderateScale } from '@hooks/_dimensions';

import type { ThemeProps } from '@props/theme';

const fontFamily: string = Platform.OS === 'ios' ? 'San Francisco' : 'Mooli Regular',
  fonts = {
    normal: {
      fontFamily,
      fontSize: moderateScale(18),
      lineHeight: getFontLineHeight(15)
    },
    extraLarge: {
      fontFamily,
      fontSize: moderateScale(26),
      fontWeight: 'bold',
      lineHeight: getFontLineHeight(21),
      textTransform: 'capitalize'
    },
    large: {
      fontFamily,
      fontSize: moderateScale(22),
      fontWeight: 'bold',
      lineHeight: getFontLineHeight(20),
      textTransform: 'capitalize'
    },
    small: {
      fontFamily,
      fontSize: moderateScale(16),
      lineHeight: getFontLineHeight(14)
    },
    extraSmall: {
      fontFamily,
      fontSize: moderateScale(12),
      lineHeight: getFontLineHeight(12)
    }
  } as const;
export const defaults = {
  animation: {
    scale: 1
  },
  borderRadius: 15,
  elevation: 5,
  fonts
}
const alerts = {
  error: '#E74C3C',
  warn: '#EAAE07',
  success: '#58D68D',
}
export const lightTheme: ThemeProps = {
  dark: false,
  colors: {
    background: '#81D7F9',
    text: '#18327A',
    primary: '#6915D9',
    secondary: '#58D68D',
    card: '#fff',
    border: '#D7F2FB',
    notification: '#E74C3C',
    ...alerts
  },
  ...defaults
};

export const darkTheme: ThemeProps = {
  dark: true,
  colors: {
    background: '#09265D',
    text: '#D7F2FB',
    primary: '#28025B',
    secondary: '#117A65',
    card: '#0B3B0B',
    border: '#D7F2FB',
    notification: '#E74C3C',
    ...alerts
  },
  ...defaults
};
