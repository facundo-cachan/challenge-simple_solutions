
/**
 * Event API methods.
 * 
 * @constructor
 */

import { apiInstance } from '.';

import type ProductProps from '@props/product';
import type { ProductInCartProps } from '@props/product';

class ProductAPI {
  getAll = async () => {
    const response: ProductProps = await apiInstance.get('getProducts')
    return response
  };
  checkout = async (data: ProductInCartProps[]) => {
    const response: ProductProps = await apiInstance.post('checkout', data)
    console.log('checkout', response);
    return response
  }
}

export default new ProductAPI()
