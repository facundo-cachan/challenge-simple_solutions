import { ListRenderItem } from "react-native";

export type ListProps = {
  data: any[];
  scrollIndicator?: boolean;
  horizontal?: boolean;
  renderItem: ListRenderItem<any>;
}
