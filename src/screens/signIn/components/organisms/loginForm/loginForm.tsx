import { useEffect, useRef, useState } from 'react'
import { Animated, View } from 'react-native'

import { Button, Input, Text } from '@atoms'
import { wp } from '@hooks/_dimensions'
import SessionAPI from '@hooks/api/sessionAPI'
import useNavigation from '@providers/navigator/hooks/useNavigation'
import { useThemeProvider } from '@providers/theme/theme-provider'
import styles from './loginForm-styles'

import type { Notification } from '@props/index'

const defaultProps = {
  duration: 1000,
  useNativeDriver: false
}
const LoginForm = () => {
  const { navigate } = useNavigation()
  const { colors, isDark } = useThemeProvider()
  const [show, setShow] = useState<boolean>(true)
  const [username, setEmail] = useState<string>('asd')
  const [password, setPassword] = useState<string>('12345')
  const [isLoading, setLoader] = useState<boolean>(false)
  const [notification, setNotification] = useState<Notification>()
  const input = { ...styles.input, backgroundColor: isDark ? '#202D59' : '#5578ED' }
  const borderRadius = useRef(new Animated.Value(5)).current
  const width = useRef(new Animated.Value(wp(85))).current

  const [title, setTitle] = useState<string | undefined>('login')
  const [leftIcon, setLeftIcon] = useState<string | undefined>()

  useEffect(() => {
    if (notification?.type === 'success') {
      Animated.parallel([
        Animated.timing(width, {
          toValue: styles.btn.height,
          ...defaultProps
        }),
        Animated.timing(borderRadius, {
          toValue: styles.btn.height,
          ...defaultProps
        })
      ]).start(({ finished }) => {
        if (finished) {
          setTitle(undefined);
          setLeftIcon('check');
          navigate('ProductsScreen')
        }
      })
    }
  }, [notification])

  const signIn = () => {
    setLoader((prev: boolean) => !prev);
    SessionAPI.signIn({ username, password })
      .then(({ id, username }: any) => {
        if (id && username) {
          setNotification({
            type: 'success',
            message: 'Login successful'
          })
        }
      })
      .finally(() => setLoader((prev: boolean) => !prev))
  }

  return (
    <View style={styles.container}>
      <Input
        style={{ container: input }}
        placeholder="User"
        value={username}
        onChangeText={setEmail}
      />
      <Input
        variant="extraSmall"
        rightIcon="lock"
        style={{ container: input }}
        placeholder="Password"
        value={password}
        onPress={() => setShow(!show)}
        secureTextEntry={show}
        onChangeText={setPassword}
      />
      <Button
        variant={leftIcon ? 'extraSmall' : 'normal'}
        title={title}
        leftIcon={leftIcon}
        style={[
          styles.btn,
          {
            width,
            borderRadius,
            backgroundColor: leftIcon ? colors.notification : colors.background
          }
        ]}
        disabled={isLoading}
        onPress={signIn}
      />
      { /* TODO: Change by toast message for notification */}
      {!leftIcon && (<Text color={
        notification?.type === 'error' ?
          colors.error : colors.notification
      }>{notification?.message}</Text>)}
    </View>
  )
}

export default LoginForm
