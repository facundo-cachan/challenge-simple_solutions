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
  items: ProductInCartProps[]
  backgroundColor: string
}
const TextItem = ({ children, color }: { children: string | string[] | number, color: string }) => (<Text style={styles.itemText} color={color}>{children}</Text>)
const Popup = ({ items, backgroundColor }: PopupProps) => {
  const checkout = () => ProductAPI.checkout(items)
  
  return (
  <View style={styles.popup}>
    <View style={styles.items}>
    {items.map(({ id, username, price, quantity }: ProductInCartProps) => (
      <View key={id} style={styles.item}>
      <TextItem color={backgroundColor}>{username}</TextItem>
      <TextItem color={backgroundColor}>{price}</TextItem>
      <TextItem color={backgroundColor}>{quantity.toString()}</TextItem>
      </View>
    ))}
      </View>
    <Button
      title="CheckOut"
      accessibilityLabel="CheckOut"
      iconVariant="feather"
      style={styles.checkout}
      onPress={checkout}
    />
  </View>
)}
const rootHeaderRight: FC<{}> = (): JSX.Element => {
  const { isDark, changeTheme, colors: { card, primary, text } } = useThemeProvider()
  const btn = { color: card, fontSize: 22 }
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
        variant="extraSmall"
        accessibilityLabel="Shopping Cart"
        iconVariant="feather"
        styleText={btn}
        title={cart.length.toString()}
        leftIcon="shopping-cart"
        onPress={() => openPortal(<Popup items={cart} backgroundColor={text} />)}
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
