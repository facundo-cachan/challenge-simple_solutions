/**
 * SignIn Screen Template
 *
 * @screen
 */


import { Loader, Text } from '@atoms'

import { View } from 'react-native'
import styles from './signIn-template-styles'

import type { TemplateProps } from '@props/screen'

const SignInScreenTemplate = ({ children, title, loading }: TemplateProps): JSX.Element => loading ? (<Loader.ActivityIndicator />) : (
  <>
    {/* <Video source={require('../../../assets/videos/UklwTkNkr8c.mp4')} /> */}
    {/* <Video source={{ type: 'mp4', uri: 'https://www.youtube.com/watch?v=UklwTkNkr8c' }} /> */}
    <View style={styles.container}>
    <Text>{title}</Text>
      {children}
    </View>
  </>
)

export default SignInScreenTemplate
