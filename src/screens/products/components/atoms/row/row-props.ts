import type { TooltipProps } from "@atoms/tooltip/tooltip-props"

export type RowProps = {
  icon: string
  items: any[]
  color?: string
  tooltip: string
  position?: TooltipProps['position']
}