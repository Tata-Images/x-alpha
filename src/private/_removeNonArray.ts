/**
 * Private function to remove all non array elements in a nested array.
 * 
 * Only apply this at the first level. Would not remove anything beyond
 * first evel of the array.
 *
 * A copy of the stripped array will be returned.
 *
 * @param {any[]} arrays
 * @returns {any[]}
 */

import { theTypeOf } from '../public/theTypeOf';

export function _removeNonArray(arrays: any[]): any[] {

  return arrays.filter((items: any) => (theTypeOf(items) === 'array'));

}