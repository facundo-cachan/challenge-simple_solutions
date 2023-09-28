import { createContext, useContext, useState } from 'react'
import { Modal, View } from 'react-native'

import { Button } from '@atoms'
import { useThemeProvider } from '@providers/theme/theme-provider'
import styles from './portal-styles'

import type { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes"
import type { PortalProps } from './portal-props'

const PortalContext = createContext<any>({})

export const PortalProvider = ({ children }: PortalProps) => {
  const { colors: { background } } = useThemeProvider()
  const [style, setStyle] = useState<ViewStyle>({height: 0, width: 0})
  const [visible, setVisible] = useState<boolean>(false)
  const [content, setContent] = useState<PortalProps['children']>(null)
  const zIndex = visible ? 9 : -99

  const openPortal = (portalContent: PortalProps['children']) => {
    setContent(portalContent);
    setVisible(!visible)
  }
  const closePortal = () => {
    setVisible(!visible)
    setContent(null)
  }
  const stylePortal = (style: ViewStyle) => {
    setStyle(style)
  }

  return (
    <PortalContext.Provider value={{ openPortal, closePortal, stylePortal }}>
      {children}
      <View
        style={[styles.backDrop, { zIndex }]}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={closePortal}
        >
          <View
            style={[
              styles.content, style,
              { backgroundColor: background }
            ]}
          >
            <Button variant="extraSmall" iconVariant="material"
              leftIcon="close-circle-outline"
              style={styles.closeButton} onPress={closePortal} />
            <View style={[styles.body, style]}>
              {content}
            </View>
          </View>
        </Modal>
      </View>
    </PortalContext.Provider>
  )
}

export const usePortal = () => {
  const { openPortal, closePortal, stylePortal } = useContext(PortalContext)
  return { openPortal, closePortal, stylePortal }
}
