
/**
 * Event API methods.
 * 
 * @constructor
 */

import { apiInstance, message } from './';

import type EventProps from '@props/events';
import type { CallbackProps } from '@props/sign';
import type UserProps from '@props/user';

type GetAll = {
  isActive?: boolean
  by?: UserProps['id']
}
const data = '{ id name avatar }'
const fragment = `isActive id title name price image pictures price address latitude
longitude tags followers ${data} likes ${data} goinTo ${data} comments { id text }
about created_by created_date updated_date`
class EventAPI {
  getAll = async ({ isActive, by }: GetAll) => {
    const { getAllEvents }: CallbackProps<EventProps[]> = await apiInstance({
      data: {
        query: `{
            getAllEvents(isActive: ${isActive || null}, by: ${by && `"${by}"` || null}) {
              data { ${fragment} }
              ${message}
            }
          }`
      }
    });
    const { data, notification } = getAllEvents;
    return { data, notification }
  };
  getByID = async (id: EventProps['id']) => {
    const { getEventById }: CallbackProps<EventProps> = await apiInstance({
      data: {
        query: `{
            getEventById(id: "${id}") {
              data { ${fragment} }
              ${message}
            }
          }`
      }
    })
    const { data, notification } = getEventById;
    return { data, notification }
  };
  create = async (event: Partial<EventProps>) => {
    const { createEvent }: CallbackProps<Partial<EventProps>> = await apiInstance({
      data: {
        query: `mutation createEvent($input: EventInput) {
          createEvent(input: $input) {
            data { id name }
            ${message}
          }
        }`,
        variables: { input: event }
      }
    })
    const { data, notification } = createEvent;
    return { data, notification }
  };
}

export default new EventAPI()
