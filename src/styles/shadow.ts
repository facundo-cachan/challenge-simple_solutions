import { defaults } from '@styles/theme';

export default {
  elevation: defaults?.elevation,
  shadowOffset: {
    height: 4,
    width: 2
  },
  shadowOpacity: 0.8,
  shadowRadius: 6
} as const
