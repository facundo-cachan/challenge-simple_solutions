import { View } from "react-native"

import { Icon, Text, Tooltip } from "@atoms"
import styles from "./row-styles"

import type { RowProps } from "./row-props"

const Row = ({ icon, items, tooltip, position, color }: RowProps) => (
  <Tooltip position={position} text={tooltip}>
    <View style={styles.row}>
      <Icon name={icon} color={color} />
      <Text style={styles.textImg} color={color}>{items?.length}</Text>
    </View>
  </Tooltip>
)

export default Row
