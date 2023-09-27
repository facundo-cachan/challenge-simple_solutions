/**
 * Represents a Common Card.
 * @constructor
 * @param {string} children - Display text.
 * @param {StyleProp} style - Visual styles.
 * @return {JSX.Element} Card
 */
import { useState } from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';

import { Button, Icon, Surface, Text } from '@atoms';
import styles from './expanded-styles';

import type { ExpandedProps } from './expanded-types';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Expanded = ({
  children, label, icon, variant = 'normal', style, iconVariant
}: ExpandedProps): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false)

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded)
  }

  return (
    <>
      <Surface style={[styles.container, style]}>
        {icon && (<Icon name={icon} type={iconVariant} />)}
        <Text variant={variant}>{label}</Text>
        <Button
          variant="extraSmall"
          accessibilityLabel="Show or hide content"
          rightIcon={expanded ? 'chevron-up' : 'chevron-down'}
          onPress={toggle}
        />
      </Surface>
      {expanded && (
        <>
          {children}
        </>
      )}
    </>
  )
}

export default Expanded
