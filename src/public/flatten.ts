/**
 * wrapper function for flattenDepth.
 * Will remove one level of nesting from a nested array.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} nArr
 * @returns {any[]}
 */

import { flattenDepth } from './flattenDepth';

export function flatten(array: any[]): any[] {
  return flattenDepth(array, 1);
}
