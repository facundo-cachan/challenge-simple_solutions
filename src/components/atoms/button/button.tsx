/**
 * Represent a Pressable Button.
 * @constructor
 * @param {ButtonProps} props
 * @return {JSX.Element} Button
 */

import { useMemo } from 'react'
import { Animated, Pressable } from 'react-native'

import { Icon, Text } from '@atoms'
import { useThemeProvider } from '@providers/theme/theme-provider'
import styles from './button-styles'

import type { IconProps } from '@atoms/icon/icon-props'
import type { FC } from 'react'
import type { ButtonProps } from './button-props'

const AnimatedButton = Animated.createAnimatedComponent(Pressable)
const Button: FC<ButtonProps> = ({
  children,
  title,
  style,
  styleText,
  leftIcon,
  rightIcon,
  loading,
  disabled,
  iconVariant,
  badge,
  variant = 'normal',
  ...props
}: ButtonProps): JSX.Element => {
  const { colors: { primary, secondary }, fonts } = useThemeProvider()
  const iconSize: number = styleText?.fontSize ?? fonts[variant].fontSize
  const color = styleText?.color ?? primary

  const IconMemo = ({ icon, style }: { icon: string; style?: IconProps['style'] }) => useMemo(
    () => (<Icon name={icon} type={iconVariant} style={style} size={iconSize} />),
    [leftIcon, rightIcon])

  return (
    <AnimatedButton role="button"
      accessibilityRole="button"
      accessibilityLabel={title ?? 'Button'}
      style={[
        { borderColor: color },
        styles[variant as keyof typeof styles],
        style,
      ]}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (<IconMemo icon="spinner" />) : (<>
        {badge && (<>
          <Text style={[styles.badge, {
            color: secondary,
            fontSize: iconSize / 2
          }]}>{badge}</Text>
        </>)}
        {leftIcon && (<IconMemo icon={leftIcon} style={styles.mr} />)}
        {title && (<Text style={[styles.mr, styleText]}>{title}</Text>)}
        {rightIcon && (<IconMemo icon={rightIcon} />)}
      </>)}
    </AnimatedButton>
  )
}

export default Button
