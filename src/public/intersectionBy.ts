/**
 * compute and return the intersection (common members) of
 * all arrays being passed in, in an array. Every element
 * will be transformed by a iteratee before the comparison.
 *
 * @since 0.0.1
 * @category Array
 *
 * @export
 * @param {...any[]} arrays
 * @param {FnIteratee} iteratee // to be passed in as the last of args
 * @returns {any[]}
 */

import { FnIteratee } from '../constants';
import { _getTrailingFunction } from '../private/_getTrailingFunction';
import { _intersection } from '../private/_intersection';
import { theTypeOf } from './theTypeOf';

export function intersectionBy(...args: any[]): any[] {

  // extract the last argument as iteratee function (if applicable)
  const iteratee: FnIteratee = _getTrailingFunction(args);

  const { length } = args;

  // minimum must pass in two arrays to computer intersection
  if (length <= 1) return [];

  // use the first array as reference
  let intersect: any[] = args[0];
  for (let i: number = 1; i < length; i++) {
    // find out what's the intersection between the currently
    // calculated intersection and the next array
    intersect = _intersection(intersect, args[i], iteratee);
  }

  return intersect;

}
