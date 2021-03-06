/**
 * Pull values from the input array, which will be altered.
 *
 * All input array items will be comapred against the values array
 * with the comparator function.
 *
 * Implemented as wrapper for _pullAll;
 *
 * @since 0.0.1
 * @category Array
 *
 * @refactor April 13, 2017
 *
 * @export
 * @param {any[]} input
 * @param {any[]} values
 * @param {FnIteratee} [iteratee]
 * @returns {any[]}
 */

import { FnComparator } from '../constants';
import { _pullAll } from '../base/_pullAll';

export function pullAllWith(input: any[], values: any[], compare?: FnComparator): any[] {

  return _pullAll(input, values, { compare });

}
