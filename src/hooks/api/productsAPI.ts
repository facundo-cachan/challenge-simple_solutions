
/**
 * Event API methods.
 * 
 * @constructor
 */

import { apiInstance, Error } from '.';

import type { CallbackProps } from '@props';
import type ProductProps from '@props/product';
import type { ProductInCartProps } from '@props/product';

class ProductAPI {
  getAll = async () => {
    const response: ProductProps = await apiInstance.get('getProducts')
    return response
  };
  checkout = async (data: ProductInCartProps[]) => {
    const response: CallbackProps = await apiInstance.post('checkout', data)
    if (response.status === 200) {
      return { data: response, notification: { type: 'success', msg: response.msg } }
    }
    return { data: null, notification: Error }
  }
}

export default new ProductAPI()
