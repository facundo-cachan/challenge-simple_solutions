/**
 * Represents a Common Card.
 * @constructor
 * @param {string} children - Display text.
 * @param {StyleProp} style - Visual styles.
 * @return {JSX.Element} Card
 */

import { Image, Pressable } from 'react-native'

import { Text } from '@atoms'
import { useThemeProvider } from '@providers/theme/theme-provider'

import styles from './cards-styles'

import type { CardProps } from './cards-props'

const Card = ({
  style,
  name,
  picture,
  description,
  onPress
}: CardProps): JSX.Element => {
  const { colors: { primary, text, background } } = useThemeProvider()

  return (
    <Pressable
      style={[
        styles.card,
        {
          backgroundColor: primary,
          shadowColor: text,
        },
        style
      ]}
      onPress={onPress}
    >
      <Text color={background} variant="large">{name}</Text>
      <Image source={{ uri: picture }} style={styles.img} />
      <Text>{description}</Text>
    </Pressable>
  )
}

export default Card
