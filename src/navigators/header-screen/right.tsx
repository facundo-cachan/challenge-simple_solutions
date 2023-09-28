import { View } from 'react-native'

import { Button, Text } from '@atoms'
import ProductAPI from '@hooks/api/productsAPI'
import { usePortal } from '@providers/portal/portal'
import { useThemeProvider } from '@providers/theme/theme-provider'
import styles from './styles'

import type { ProductInCartProps } from '@props/product'
import useCart from '@providers/recoil/atoms/cart'
import type { FC } from 'react'

type PopupProps = {
  color: string
  backgroundColor: string
  items: ProductInCartProps[]
}
type TextItemProps = {
  children: string | string[] | number
  color: PopupProps['color']
}
const TextItem = ({ children, color }: TextItemProps) => (<Text style={styles.itemText} color={color}>{children}</Text>)
const Popup = ({ items, color, backgroundColor }: PopupProps) => {
  const checkout = () => ProductAPI.checkout(items).then(({ notification }) => {
    if (notification.type === 'success') {
      usePortal().closePortal()
      useCart().clear()
    }
  })

  return (
    <View style={[styles.popup, { backgroundColor }]}>
      <View style={styles.items}>
        {items.map(({ id, username, price, quantity }: ProductInCartProps) => (
          <View key={id} style={styles.item}>
            <TextItem color={color}>{username}</TextItem>
            <TextItem color={color}>{`$${price}`}</TextItem>
            <TextItem color={color}>{quantity.toString()}</TextItem>
          </View>
        ))}
      </View>
      <Button
        title="CheckOut"
        iconVariant="feather"
        styleText={{ color }}
        accessibilityLabel="CheckOut"
        onPress={checkout}
      />
    </View>
  )
}
const rootHeaderRight: FC<{}> = (): JSX.Element => {
  const { isDark, changeTheme,
    colors: { card, primary, text },
    fonts: {
      normal: { fontSize },
      extraLarge: { fontSize: largeFontSize }
    }
  } = useThemeProvider()
  const btn = { color: card, fontSize }
  const { cart } = useCart()
  const { openPortal } = usePortal()

  return (
    <View style={[styles.tapbarRight, { backgroundColor: primary }]}>
      <Button
        variant="extraSmall"
        accessibilityLabel="Theme"
        iconVariant="feather"
        styleText={btn}
        leftIcon={isDark ? 'moon' : 'sun'}
        onPress={() => changeTheme(!isDark)}
      />
      {cart.length > 0 && (<Button
        badge={cart.length}
        variant="extraSmall"
        accessibilityLabel="Shopping Cart"
        iconVariant="fontAwesome"
        styleText={{ ...btn, fontSize: largeFontSize }}
        leftIcon="shopping-cart"
        onPress={() => openPortal(<Popup items={cart}
          color={primary} backgroundColor={text} />)}
      />)}
      <Button
        variant="extraSmall"
        iconVariant="material"
        accessibilityLabel="Account"
        leftIcon="logout"
        styleText={btn}
        onPress={() => console.log('LogOut')}
      />
    </View>
  )
}

export default rootHeaderRight
