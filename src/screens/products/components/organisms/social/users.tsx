import { Text } from "@atoms"
import translator from "@hooks/_translator"
import { SocialRow } from "@molecules"

import type { FC } from "react"

type Props = {
  title?: string
  id: string
  items: []
}

const SocialUsers: FC<Props> = ({ id, items }: Props): JSX.Element => (
  <>
    <Text>{translator(id)} {items?.length}</Text>
    <SocialRow title={id} items={items} />
  </>
)

export default SocialUsers