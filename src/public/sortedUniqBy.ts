/**
 * Take an input array, and produce an output array with only the
 * unique items from the input array. All redundant items will only
 * appear once in output.
 *
 * [1,1,2,2,3,4] => [1,2,3,4]
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {any[]} input
 * @param {FnIteratee} [iteratee]
 * @returns {any[]}
 */

import { FnIteratee } from '../constants';
import { isTheSame } from './isTheSame';

export function sortedUniqBy(input: any[], iteratee?: FnIteratee): any[] {

  const output: any[] = [];

  if (!Array.isArray(input)) return input;

  let prev: any = null;

  input.forEach((item: any) => {

    // since this is a sorted array, we can just skip all
    // redundant items after the first one, and there is no
    // need to check if it exists in output array before
    // pushing
    const value: any = iteratee ? iteratee(item) : item;
    if (value === prev) return;
    prev = value;
    output.push(item);

  });

  return output;

}
