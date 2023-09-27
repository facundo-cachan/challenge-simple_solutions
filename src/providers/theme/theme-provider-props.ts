import type { ThemeProps } from '@props/theme';
import type { Dispatch, ReactNode, SetStateAction } from "react";

export type ThemeDataProps = ThemeProps & {
  isDark: boolean
  changeTheme: Dispatch<SetStateAction<boolean>>
}
export type ThemeProviderProps = {
  children: ReactNode
}