
/**
 * User API methods.
 * 
 * @constructor
 */

import { apiInstance, message } from './';

import type UserProps from '@props/product';
import type { CallbackProps } from '@props/sign';

class UserAPI {
  getByID = async (id: UserProps['id']) => {
    const { getUserById }: { getUserById: CallbackProps<UserProps> } = await apiInstance({
      data: {
        query: `{
              getUserById(id: ${id}) {
                data {
                  id
                  name
                  avatar
                  phone
                  email
                  rol {
                    id
                    name
                  }
                }
                ${message}
              }
            }`
      }
    });
    const { data, notification } = getUserById;
    return { data, notification }
  }
}

export default new UserAPI()
