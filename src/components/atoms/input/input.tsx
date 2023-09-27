/**
 * Represents a Input component.
 * @constructor
 * @param {string} variant - Variant of Input.
 * @return {JSX.Element} Input
 */

import { useMemo } from 'react'
import { Animated, TextInput, View } from 'react-native'

import { Button, Icon, Text } from '@atoms'
import { useThemeProvider } from '@providers/theme/theme-provider'
import styles from './input-styles'

import type { TextInputProps } from './input-props'

const Input = ({ children,
  label,
  style,
  leftIcon,
  rightIcon,
  loading,
  variant = 'extraSmall',
  iconVariant,
  placeholder,
  onPress,
  ...props }: TextInputProps): JSX.Element => {
  const { colors: { background, text } } = useThemeProvider()

  const styler = useMemo(() => ({
    container: {
      ...styles.container,
      ...style?.content,
    },
    label: {
      ...styles.label,
      ...style?.label
    },
    content: {
      ...styles.content,
      backgroundColor: background,
      ...style?.content,
    },
    input: {
      ...styles.input,
      ...style?.input
    }
  }), [background, text, style])

  return (
    <Animated.View role="contentinfo"
      accessibilityRole="text"
      accessibilityLabel={label ?? 'Input'}
      style={[styler.container,
      styles[variant as keyof typeof styles],
      ]}
    >
      {loading ? (<Icon name="spinner" type={iconVariant} />) : (<>
        {label && <Text variant={variant} style={styler.label}>{label}</Text>}
        <View style={styler.content}>
          {leftIcon && (<Icon name={leftIcon} type={iconVariant} />)}
          <TextInput style={styler.input} placeholderTextColor={text}
            placeholder={placeholder} {...props} />
          {rightIcon && (<Button
            variant="extraSmall"
            leftIcon={rightIcon}
            accessibilityRole="button"
            accessibilityLabel="Input Right Button"
            onPress={onPress}
          />)}
        </View>
      </>
      )}
    </Animated.View>
  )
}

export default Input
