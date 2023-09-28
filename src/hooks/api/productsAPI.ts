
/**
 * Event API methods.
 * 
 * @constructor
 */

import { apiInstance } from '.'

import type ProductProps from '@props/product'

class ProductAPI {
  getAll = async () => {
    const response: ProductProps = await apiInstance.get('getProducts')
    return response
  }
}

export default new ProductAPI()
