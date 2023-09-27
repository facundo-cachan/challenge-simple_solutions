import { Input } from '@atoms'
import { ScrollView } from 'react-native'
import styles from './screens-styles'

import { useThemeProvider } from '@providers/theme/theme-provider'

import { CheckboxProps } from '@atoms/checkbox/checkbox-props'
import type { NavigatorProps } from '@props/navigator'
import { useState, type FC } from 'react'

type CheckboxProp = Omit<CheckboxProps, 'backgroundColor'>

const plan: CheckboxProp[] = [
  {
    label: 'user_registration'
  },
  {
    label: 'user_vote'
  },
  {
    label: 'quizard_preferences'
  },
  {
    label: 'ai_recommendations'
  },
  {
    label: 'covid_19'
  },
  {
    label: 'purchase',
  }
  ,
  {
    label: 'search_company',
  }
]
const ScreenInput: FC<NavigatorProps> = () => {
  const { colors: { backgroundColor } } = useThemeProvider()
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <ScrollView style={[styles.screen, { backgroundColor }]}>
      <Input label="Simple" onChangeText={setInputValue} value={inputValue} />
      <Input label="Simple" onChangeText={setInputValue} value={inputValue} loading />
      <Input leftIcon="lock" label="Lock Icon Left" onChangeText={setInputValue} value={inputValue} />
      <Input rightIcon="search" label="Search Icon Right" onChangeText={setInputValue} value={inputValue} />
      <Input leftIcon="lock" rightIcon="search" label="Both icons" onChangeText={setInputValue} value={inputValue} />
      <Input leftIcon="car" onChangeText={setInputValue} value={inputValue} />
      <Input leftIcon="jenkins" label="small" onChangeText={setInputValue} />
      <Input leftIcon="calendar" label="large" onChangeText={setInputValue} value={inputValue} />
      <Input leftIcon="fire" label="extraLarge" onChangeText={setInputValue} value={inputValue} />
    </ScrollView>
  )
}

export default ScreenInput