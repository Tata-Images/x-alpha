/**
 * extract the difference of input and exclude in an array.
 * examine input, what ever not in excldude will be returned
 * in a new array.
 *
 * pass in the comparator to control how the comparison is done.
 *
 * Comparator return true to indicate the items to not be included.
 * Take note that the comparison will be done against the entire
 * of exclude array.
 *
 * @param {any[]} input
 * @param {any[]} exclude
 * @param {FnCompare} comparator
 * @returns {any[]}
 */

import { FnCompare, _diff } from '../private/_diff';

export function differenceWith(input: any[], exclude: any[], comparator: FnCompare): any[] {
  return _diff(input, exclude, null, comparator);
}
