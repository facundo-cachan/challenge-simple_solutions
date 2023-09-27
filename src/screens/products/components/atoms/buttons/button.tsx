import { Button } from "@atoms"
import translator from "@hooks/_translator"

import type { ButtonProps } from "@atoms/button/button-props"
import type { FC } from "react"

const Btn: FC<ButtonProps> = ({ title = '', onPress, ...props }: ButtonProps): JSX.Element => (
  <Button title={translator(title)} onPress={onPress} {...props} />)

export default Btn