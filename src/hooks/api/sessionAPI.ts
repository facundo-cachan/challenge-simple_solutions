/**
 * Sign API methods.
 * 
 * @constructor
 */

import { PASSWORD, USERNAME } from '@env'
import { apiInstance } from '.'

import type { CallbackProps } from '@props'
import type { SignInProps } from '@props/sign'

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
      return response
    }
    return {
      msg: 'Token NO generado'
    }
  }
}

export default new SessionAPI()