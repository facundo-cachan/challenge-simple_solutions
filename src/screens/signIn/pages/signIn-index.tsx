/**
 * SignIn Screen Page
 *
 * @screen
 */

import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { Text } from '@atoms'
import { session as sessionAtom } from '@providers/recoil/atoms/session'
import { LoginForm } from '../components'
import SignInScreenTemplate from '../templates/signIn-template-index'

import type { NavigatorProps } from '@props/navigator'
import type SessionProps from '@props/session'
import type { FC } from 'react'

const SignInScreen: FC<NavigatorProps> = ({
  navigation: { navigate }
}): JSX.Element => {
  const session = useRecoilValue<SessionProps | undefined>(sessionAtom)

  useEffect(() => {
    if (session) {
      navigate('ProductsScreen')
    }
  }, [session])

  return (
    <SignInScreenTemplate>
      <LoginForm />
      <Text>{JSON.stringify(session, null, 2)}</Text>
    </SignInScreenTemplate>
  )
}

export default SignInScreen;
