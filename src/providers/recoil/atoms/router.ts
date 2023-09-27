/**
 * https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence
 */

import { atom, selector } from 'recoil';

import type { Router } from '@props/navigator';

export const router = atom<Router>({
  default: undefined,
  key: 'router'
})
export const hookRoute = selector<Router>({
  key: 'hookRoute',
  get: ({ get }) => get(router),
  set: ({ set }, { name, params }) => {
    set(
      router,
      { name, params }
    )
  }
})


export default hookRoute;
