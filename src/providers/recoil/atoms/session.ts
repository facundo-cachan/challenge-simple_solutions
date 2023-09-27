import { atom } from 'recoil';

import type { SessionProps } from '@props/session';

export const session = atom<SessionProps>({
  default: undefined,
  key: 'session '
})

export default session;
