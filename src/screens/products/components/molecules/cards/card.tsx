/**
 * Represents a Event Card.
 * @constructor
 * @return {JSX.Element} Card
 */


import { ImageBackground, Platform, UIManager, View } from 'react-native'

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
}

import { Button, Text } from '@atoms'
import { Expanded } from '@molecules'
import useNavigation from '@providers/navigator/hooks/useNavigation'
import Tags from '../row/tags'
import styles from './card-styles'

const CardEvent = ({ id, title, name, isActive, categoryId, image = 0, pictures, price,
  address, latitude, longitude, tags, followers, likes, goinTo, comments, onPress, textColor, finishColor, iconColors
}: any): JSX.Element => {
  const { navigate } = useNavigation()

  return (
    <View key={categoryId} style={styles.card}>
      <ImageBackground key={id} style={styles.img}
        source={{ uri: pictures[image] }} blurRadius={!isActive ? 10 : 1}>
        <View style={styles.overlay}>
          <Text variant="large" color={textColor} onPress={onPress}>{title}</Text>
        </View>
        {!isActive && (<Text variant="large" color={finishColor}>Not available</Text>)}
      </ImageBackground>
      <Expanded label={name}>
        <Text>${price}</Text>
        <Button
          title={`About ${name}`}
          variant="extraSmall"
          onPress={() => navigate('PlaceByIdScreen', { placeId: id })}
        />
        <Tags tags={tags} />
      </Expanded>
    </View>
  )
}

export default CardEvent
