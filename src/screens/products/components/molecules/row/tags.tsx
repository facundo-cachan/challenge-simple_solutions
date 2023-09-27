import { View } from "react-native";

import { Text } from "@atoms";
import styles from "./tags-styles";

import type { TagsProps } from "./tags-props";

const Tags = ({ tags, title }: TagsProps) => (
  <>
    {title && (<Text variant="large">Tags</Text>)}
    <View style={styles.container}>
      {tags?.map((tag: string) => (
        <Text key={tag}>{`#${tag} `}</Text>
      ))
      }
    </View>
  </>
)

export default Tags;
