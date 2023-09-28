/**
 * Sign API methods.
 * 
 * @constructor
 */

// @ts-ignore
import { PASSWORD, USERNAME } from '@env';
import { Error, apiInstance } from '.';

import type { CallbackProps } from '@props';
import type { SignInProps } from '@props/sign';

class SessionAPI {
  signIn = async ({ username, password }: SignInProps) => {
    // TODO: Remove this validation in staging
    if (username == USERNAME && password == PASSWORD) {
      const response: CallbackProps = await apiInstance.get('login', {
        params: {
          username,
          password,
        }
      })
      if (response.status === 200) {
        return { data: response, notification: { type: 'success', msg: response.msg } }
      }
    }
    return { data: null, notification: Error }
  }
}

export default new SessionAPI()