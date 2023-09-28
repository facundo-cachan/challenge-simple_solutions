

import rootHeaderLeft from './left'
import rootHeaderRight from './right'

import type { HeaderScreenProps } from '@props/navigator'

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
}

const rootHeaderScreen = ({ title, left, right }: HeaderScreenProps) => {

  return {
    transitionSpec: {
      open: config,
      close: config,
    },
    cardStyle: {
      backgroundColor: 'transparent',
    },
    headerMode: 'screen',
    headerShadowVisible: true,
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerLeft: left && rootHeaderLeft,
    headerRight: right && rootHeaderRight,
    headerTitle: () => (title ?? <></>)
  }
}

export default rootHeaderScreen
