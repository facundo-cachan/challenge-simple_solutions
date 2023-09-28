/**
 * SignIn Screen Template
 *
 * @screen
 */


import { Loader } from '@atoms'

import { View } from 'react-native'
import styles from './signIn-template-styles'

import type { TemplateProps } from '@props/screen'

const SignInScreenTemplate = ({ children, loading }: TemplateProps): JSX.Element => loading ? (<Loader.ActivityIndicator />) : (
  <View style={styles.container}>
    {children}
  </View>
)

export default SignInScreenTemplate
