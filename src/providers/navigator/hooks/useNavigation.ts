/**
 * `useNavigation` is a React Hook that returns a `navigator` object that can be used to navigate
 * between screens
 * @returns The navigator object
 */

import { useNavigation as useNativeNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import { router } from '@providers/recoil/atoms/router';
import { useSetRecoilState } from 'recoil';

import type { NavigatorProps, Router } from '@props/navigator';

const useNavigation = () => {
  const navigation = useNativeNavigation<NavigatorProps>()
  const { navigate, goBack, getState, dispatch } = navigation
  const { routes } = getState()
  const setRoute = useSetRecoilState(router)

  useEffect(() => {
    const route: Router = routes[routes.length - 1]
    setRoute(route)
  }, [routes])

  return { navigate, goBack, dispatch };
}

export default useNavigation;
