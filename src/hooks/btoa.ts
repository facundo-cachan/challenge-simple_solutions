/**
 * @description base64编码
 * @param {string} str
 * @returns {string}
*/

import { Buffer } from 'buffer';

const btoa = (str: string) => {
  if (Buffer.byteLength(str) !== str.length)
    throw new Error('bad string!');
  return new Buffer(str, 'binary').toString('base64')
}

export default btoa